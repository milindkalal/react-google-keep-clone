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
`;

const Archive = ({ note }) => {
  //datacontext
  const { notes, setNotes, archiveNotes, setArchiveNotes, setDeletedNotes } =
    useContext(DataContext);

  // ArchiveNote
  const UnarchiveNote = (note) => {
    const updatedNote = notes.filter((data) => data.id !== note.id);

    setArchiveNotes(updatedNote);
    setNotes((prevArr) => [note, ...prevArr]);
  };
  //DeleteNote
  const deleteNote = (note) => {
    const updatedNote = archiveNotes.filter((data) => data.id !== note.id);
    setArchiveNotes(updatedNote);
    setDeletedNotes((prevArr) => [note, ...prevArr]);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.title}</Typography>
        <Typography>{note.content}</Typography>
      </CardContent>
      <CardActions>
        <Unarchive
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => UnarchiveNote(note)}
        />
        <Delete fontSize="small" onClick={() => deleteNote(note)} />
      </CardActions>
    </StyledCard>
  );
};

export default Archive;
