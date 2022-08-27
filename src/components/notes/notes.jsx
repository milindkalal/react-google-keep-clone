import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { useContext } from "react";
import { Grid } from "@mui/material";
//components
import Form from "./Form";
import Note from "./Note";
import { DataContext } from "../../context/DataProvider";
import EmptyNote from "../notes/EmptyNote";
const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  const { notes } = useContext(DataContext);
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <Form />
        {notes.length > 0 ? (
          <Grid container style={{ marginTop: 16 }}>
            {notes.map((note) => (
              <Grid item>
                <Note note={note} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyNote />
        )}
      </Box>
    </Box>
  );
};

export default Notes;
