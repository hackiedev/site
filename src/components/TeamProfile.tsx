import styled, { css } from "styled-components";
import Text from "../components/Text";
import { colors, separationSizes } from "../utils/style";
import { cssFor } from "../utils/breakpoints";

interface Props {
  name: string;
  avatarSrc: string;
  description: string;
  linkedIn: string;
}

const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 11em;
  margin: ${separationSizes.default};
  ${cssFor.desktop`
    margin: ${separationSizes.large};
  `};
`;

const Avatar = styled.img`
  height: 40vw;
  border-radius: 50%;
  padding: 0.3em;
  background-color: ${colors.white};
  ${cssFor.laptop`
    height: 20vw;
  `};
  ${cssFor.desktop`
    height: 15vw;
  `};
`;

const TeamProfile = ({ name, avatarSrc, description, linkedIn }: Props) => {
  const openLinkedIn = () => {
    window.open(`https://www.linkedin.com/in/${linkedIn}`, "_blank");
  };

  return (
    <Container onClick={openLinkedIn}>
      <Avatar src={avatarSrc} />
      <Text paddingVertical="small" component="h2">
        {name}
      </Text>
      <Text>{description}</Text>
    </Container>
  );
};
export default TeamProfile;
