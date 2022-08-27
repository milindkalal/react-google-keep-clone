import { createContext } from "react";
import { useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);

  //children-Home comp
  return (
    <DataContext.Provider
      value={{
        notes,
        setNotes,
        archiveNotes,
        setArchiveNotes,
        deletedNotes,
        setDeletedNotes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
