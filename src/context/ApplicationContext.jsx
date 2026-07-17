import React, {
  createContext,
  useContext,
  useState,
} from "react";

const ApplicationContext = createContext();

export const useApplications = () => {
  return useContext(ApplicationContext);
};

export const ApplicationProvider = ({ children }) => {

  const [application, setApplication] = useState(null);

  const value = {

    application,

    setApplication,

  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
};