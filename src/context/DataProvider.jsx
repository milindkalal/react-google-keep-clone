import { createContext, useState } from "react";

export const DataContext = createContext(null);

const [notes, setNotes] = useState([]);
const [archiveNotes, setArchiveNotes] = useState([]);
const [deletedNotes, setDeletedNotes] = useState([]);

const DataProvider = ({ children }) => {
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};

export default DataProvider;
