import React, {
  createContext,
  useContext,
  useState,
} from "react";

import { db } from "@/firebase/firebase";

import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

const ApplicationContext = createContext();

export const useApplications = () => {
  return useContext(ApplicationContext);
};

export const ApplicationProvider = ({ children }) => {

  const [application, setApplication] = useState(null);

  const [loading, setLoading] = useState(false);

  // Submit Application

  const submitApplication = async (applicationData) => {

    const applicationsRef = collection(db, "applications");

    await addDoc(applicationsRef, {

      ...applicationData,

      status: "Under Review",

      submittedAt: serverTimestamp(),

    });

  };

  // Get Logged In User Application

  const getMyApplication = async (userId) => {

  setLoading(true);

  try {

    const applicationsRef = collection(db, "applications");

    const q = query(
      applicationsRef,
      where("applicantId", "==", userId)
    );

    const snapshot = await getDocs(q);

    if (!snapshot.empty) {

      const applicationData = {
        id: snapshot.docs[0].id,
        ...snapshot.docs[0].data(),
      };

      setApplication(applicationData);

      return applicationData;

    } else {

      setApplication(null);

      return null;

    }

  } catch (error) {

    console.error(error);

    return null;

  } finally {

    setLoading(false);

  }

};

  const getAllApplications = async () => {

  setLoading(true);

  try {

    const applicationsRef = collection(db, "applications");

    const snapshot = await getDocs(applicationsRef);

    const applications = snapshot.docs.map((doc) => ({

      id: doc.id,

      ...doc.data(),

    }));

    return applications;

  } catch (error) {

    console.error(error);

    return [];

  } finally {

    setLoading(false);

  }

};

const getApplicationById = async (applicationId) => {

  try {
    const docRef = doc(db, "applications", applicationId);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) {
      return null;
    }
    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateApplicationStatus = async (applicationId, status, rejectionReason ="") => {
  try {
    const applicationRef = doc(
      db,
      "applications",
      applicationId
    );

    await updateDoc(applicationRef, {

      status,
      rejectionReason,

    });

  } catch (error) {

    console.error(error);

    throw error;

  }

};
  return (

    <ApplicationContext.Provider

      value={{

        application,

        loading,

        submitApplication,

        getMyApplication,

        getAllApplications,

        getApplicationById,

        updateApplicationStatus,

      }}

    >

      {children}

    </ApplicationContext.Provider>

  );

};