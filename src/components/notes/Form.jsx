import { Box, TextField, ClickAwayListener } from "@mui/material";
//box-gives div by default
//clickAwayListner-Detect if a click event happened outside of an element. It listens for clicks that occur somewhere in the document.
import { styled } from "@mui/material/styles";
//useRef-used to access a DOM element directly.
import { useState, useRef, useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { v4 as uuid } from "uuid";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 600px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67/30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  padding: 10px 15px;
  border-radius: 8px;
  border-color: #e0e0e0;
  margin: auto;
  min-height: 30px;
`;

const note = {
  id: "",
  title: "",
  content: "",
};

const Form = () => {
  //show textfield
  const [showTextField, setShowTextField] = useState(false);

  //adding a particular note
  const [addNote, setAddNote] = useState({ ...note, id: uuid() });

  //using the context
  const { setNotes } = useContext(DataContext);

  const containerRef = useRef();

  //Handle Click
  const onTextAreaClick = () => {
    setShowTextField(true);
    //increasing height
    containerRef.current.style.minHeight = "70px";
  };
  const handleClickAway = () => {
    setShowTextField(false);
    //decreasing height
    containerRef.current.style.minHeight = "30px";
    setAddNote({ ...note, id: uuid() });

    if (addNote.title || addNote.content) {
      setNotes((prevArr) => [addNote, ...prevArr]);
    }
  };

  //onChange
  const onTextChange = (e) => {
    let changeNote = { ...addNote, [e.target.name]: e.target.value }; //targeting name and changing the value
    setAddNote(changeNote);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container ref={containerRef}>
        {showTextField && (
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
            name="title"
            onChange={(e) => onTextChange(e)}
            value={addNote.title}
          />
        )}
        <TextField
          placeholder="Take a note..."
          multiline
          maxRows={Infinity}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onClick={onTextAreaClick}
          name="content"
          onChange={(e) => onTextChange(e)}
          value={addNote.content}
        />
      </Container>
    </ClickAwayListener>
  );
};

export default Form;
