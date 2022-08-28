import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { useContext } from "react";
import { Grid } from "@mui/material";
//components

import Archive from "./Archive";
import { DataContext } from "../../context/DataProvider";
import EmptyArchive from "./EmptyArchive";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Archives = () => {
  const { archiveNotes } = useContext(DataContext);
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        {archiveNotes.length > 0 ? (
          <Grid container>
            {archiveNotes.map((archive) => (
              <Grid item>
                <Archive archive={archive} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyArchive />
        )}
      </Box>
    </Box>
  );
};

export default Archives;
