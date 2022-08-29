import { styled } from "@mui/material/styles";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import {
  UnarchiveOutlined as Unarchive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";
//import useContext to archive and delete
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  @media (max-width: 425px) {
    width: 200px;
    padding: 0.1rem;
    margin-left: 22px;
  }
`;

const Archive = ({ archive }) => {
  //datacontext
  const { setNotes, archiveNotes, setArchiveNotes, setDeletedNotes } =
    useContext(DataContext);

  // ArchiveNote
  const unArchiveNote = (archive) => {
    const updatedNote = archiveNotes.filter((data) => data.id !== archive.id);
    setArchiveNotes(updatedNote);
    setNotes((prevArr) => [archive, ...prevArr]);
  };
  //DeleteNote
  const deleteNote = (archive) => {
    const updatedNote = archiveNotes.filter((data) => data.id !== archive.id);
    setArchiveNotes(updatedNote);
    setDeletedNotes((prevArr) => [archive, ...prevArr]);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{archive.title}</Typography>
        <Typography>{archive.content}</Typography>
      </CardContent>
      <CardActions>
        <Unarchive
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => unArchiveNote(archive)}
        />
        <Delete fontSize="small" onClick={() => deleteNote(archive)} />
      </CardActions>
    </StyledCard>
  );
};

export default Archive;
