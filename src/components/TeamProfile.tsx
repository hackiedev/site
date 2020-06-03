import styled, { css } from "styled-components";
import Text from "../components/Text";
import { colors, separationSizes } from "../utils/style";

interface Props {
  name: string;
  avatarSrc: string;
  description: string;
}

const Avatar = styled.img`
  height: 9em;
  border-radius: 50%;
  padding: 0.3em;
  background-color: ${colors.white};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  min-width: 13em;
  margin: ${separationSizes.default};
`;

const TeamProfile = ({ name, avatarSrc, description }: Props) => (
  <Container>
    <Avatar src={avatarSrc} />
    <Text paddingVertical="small" component="h2">
      {name}
    </Text>
    <Text>{description}</Text>
  </Container>
);
export default TeamProfile;
