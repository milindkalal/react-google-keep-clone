import { styled } from "@mui/material/styles";
import { useContext } from "react";
import { Box, Grid } from "@mui/material";
//components

import DeleteNote from "./DeleteNote";
import { DataContext } from "../../context/DataProvider";
import EmptyTrash from "./EmptyTrash";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
  const { deleteNotes } = useContext(DataContext);
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        {deleteNotes.length > 0 ? (
          <Grid container>
            {deleteNotes.map((deleteNote) => (
              <Grid item>
                <DeleteNote deleteNote={deleteNote} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyTrash />
        )}
      </Box>
    </Box>
  );
};

export default DeleteNotes;
