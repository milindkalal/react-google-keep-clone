import { LightbulbOutlined as Lightbulb } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Light = styled(Lightbulb)`
  font-size: 120px;
  color: #f5f5f5;
`;

const Text = styled(Typography)`
  color: #80868b;
  font-size: 22px;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  ${"" /* align is used oly when display is flex */}
  align-items: center;
  margin-top: 20vh;
`;

const EmptyNote = () => {
  return (
    <Container>
      <Light />
      <Text>Notes you add appear here</Text>
    </Container>
  );
};

export default EmptyNote;
