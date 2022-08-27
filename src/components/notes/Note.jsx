import { styled } from "@mui/material/styles";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";
const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;
const Note = ({ note }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.title}</Typography>
        <Typography>{note.content}</Typography>
      </CardContent>
      <CardActions>
        <Archive fontSize="small" style={{ marginLeft: "auto" }} />
        <Delete fontSize="small" />
      </CardActions>
    </StyledCard>
  );
};

export default Note;
