import { Text } from "../shered/ui/Text";
import { Container } from "@mui/system";

export const FakeAutorizationData = () => {
  return (
    <Container sx={{ marginBottom: 4 }}>
      <Text>
        <b>Your email:</b> some@gmail.com
      </Text>
      <Text>
        <b>Pass:</b> : some12345
      </Text>
    </Container>
  );
};
