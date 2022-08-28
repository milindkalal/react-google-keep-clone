import { styled } from "@mui/material/styles";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import {
  ArchiveOutlined as Archive,
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
`;

const Note = ({ note }) => {
  //datacontext
  const { notes, setNotes, setArchiveNotes, setDeleteNotes } =
    useContext(DataContext);

  // ArchiveNote
  const archiveNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);

    setNotes(updatedNotes);
    setArchiveNotes((prevArr) => [note, ...prevArr]);
  };
  //DeleteNote
  const deleteNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setDeleteNotes((prevArr) => [note, ...prevArr]);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.title}</Typography>
        <Typography>{note.content}</Typography>
      </CardContent>
      <CardActions>
        <Archive
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => archiveNote(note)}
        />
        <Delete fontSize="small" onClick={() => deleteNote(note)} />
      </CardActions>
    </StyledCard>
  );
};

export default Note;
