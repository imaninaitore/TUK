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
  updateDoc,
  doc,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";

const ApplicationContext = createContext();

export const useApplications = () => {
  return useContext(ApplicationContext);
};

export const ApplicationProvider = ({ children }) => {
  const [application, setApplication] = useState(null);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);

  const applicationsCollection = collection(db, "applications");

  // ============================
  // Submit Application
  // ============================

  const submitApplication = async (applicationData) => {
    try {
      const docRef = await addDoc(applicationsCollection, {
        ...applicationData,
        status: "Under Review",
        submittedAt: serverTimestamp(),
      });

      setApplication({
        id: docRef.id,
        ...applicationData,
        status: "Under Review",
      });

      return docRef.id;
    } catch (error) {
      console.error("Error submitting application:", error);
      throw error;
    }
  };

  // ============================
  // Get Logged-in User Application
  // ============================

  const getMyApplication = async (userId) => {
    try {
      setLoading(true);

      const q = query(
        applicationsCollection,
        where("applicantId", "==", userId)
      );

      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        const data = {
          id: snapshot.docs[0].id,
          ...snapshot.docs[0].data(),
        };

        setApplication(data);
      } else {
        setApplication(null);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // ============================
  // Admin - Get All Applications
  // ============================

  const getAllApplications = async () => {
    try {
      setLoading(true);

      const snapshot = await getDocs(applicationsCollection);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setApplications(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // ============================
  // Admin - Update Status
  // ============================

  const updateApplicationStatus = async (id, status) => {
    try {
      const applicationRef = doc(db, "applications", id);

      await updateDoc(applicationRef, {
        status,
      });

      getAllApplications();
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    application,
    applications,
    loading,

    submitApplication,
    getMyApplication,
    getAllApplications,
    updateApplicationStatus,
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
};