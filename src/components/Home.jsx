import SwipeDrawer from "./SwipeDrawer";
import { Box } from "@mui/material";
import Notes from "./notes/notes";

const Home = () => {
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <SwipeDrawer />
      <Notes />
    </Box>
  );
};

export default Home;
