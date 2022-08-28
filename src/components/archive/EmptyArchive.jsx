import { ArchiveOutlined as Archive } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Arc = styled(Archive)`
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
  margin-top: 25vh;
`;

const EmptyArchive = () => {
  return (
    <Container>
      <Arc />
      <Text>Your archived notes appear here</Text>
    </Container>
  );
};

export default EmptyArchive;
