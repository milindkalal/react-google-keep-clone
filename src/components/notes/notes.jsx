import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

//components
import Form from "./Form";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <Form />
      </Box>
    </Box>
  );
};

export default Notes;
