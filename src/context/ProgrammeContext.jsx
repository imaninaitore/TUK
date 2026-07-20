import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { db } from "@/firebase/firebase";

import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const ProgrammeContext = createContext();

export function useProgrammes() {
  return useContext(ProgrammeContext);
}

export function ProgrammeProvider({ children }) {
  const [programmes, setProgrammes] = useState([]);
  const [loading, setLoading] = useState(true);

  const programmeCollection = collection(db, "programmes");

  // Load all programmes 

  const getProgrammes = async () => {
    try {
      const snapshot = await getDocs(programmeCollection);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProgrammes(data);
    } catch (error) {
      console.error("Error loading programmes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProgrammes();
  }, []);

  // Add Programme

  const addProgramme = async (programme) => {
    try {
      const docRef = await addDoc(programmeCollection, programme);

      setProgrammes((prev) => [
        ...prev,
        {
          id: docRef.id,
          ...programme,
        },
      ]);
    } catch (error) {
      console.error("Error adding programme:", error);
    }
  };

  // Update Programme

  const updateProgramme = async (id, updatedProgramme) => {
    try {
      const programmeDoc = doc(db, "programmes", id);

      await updateDoc(programmeDoc, updatedProgramme);

      setProgrammes((prev) =>
        prev.map((programme) =>
          programme.id === id
            ? { ...programme, ...updatedProgramme }
            : programme
        )
      );
    } catch (error) {
      console.error("Error updating programme:", error);
    }
  };

  // Delete Programme

  const deleteProgramme = async (id) => {
    try {
      const programmeDoc = doc(db, "programmes", id);

      await deleteDoc(programmeDoc);

      setProgrammes((prev) =>
        prev.filter((programme) => programme.id !== id)
      );
    } catch (error) {
      console.error("Error deleting programme:", error);
    }
  };

  const value = {
    programmes,
    loading,
    getProgrammes,
    addProgramme,
    updateProgramme,
    deleteProgramme,
  };

  return (
    <ProgrammeContext.Provider value={value}>
      {children}
    </ProgrammeContext.Provider>
  );
}