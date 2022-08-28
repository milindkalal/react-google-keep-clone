import { styled } from "@mui/material/styles";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import {
  RestoreFromTrashOutlined as Restore,
  DeleteForeverOutlined as Delete,
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
`;

const DeleteNote = ({ deleteNote }) => {
  //datacontext
  const { deleteNotes, setNotes, setAcrchiveNotes, setDeleteNotes } =
    useContext(DataContext);

  // ArchiveNote
  const restoreNote = (deleteNote) => {
    const updatedNotes = deleteNotes.filter(
      (data) => data.id !== deleteNote.id
    );

    setDeleteNotes(updatedNotes);
    setNotes((prevArr) => [deleteNote, ...prevArr]);
  };
  //DeleteNote
  const removeNote = (deleteNote) => {
    const updatedNotes = deleteNotes.filter(
      (data) => data.id !== deleteNote.id
    );
    setDeleteNotes(updatedNotes);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{deleteNote.title}</Typography>
        <Typography>{deleteNote.content}</Typography>
      </CardContent>
      <CardActions>
        <Delete
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => removeNote(deleteNote)}
        />
        <Restore fontSize="small" onClick={() => restoreNote(deleteNote)} />
      </CardActions>
    </StyledCard>
  );
};

export default DeleteNote;
