import React from "react";
import styled from "styled-components";

import Container from "../components/Container";
import Text from "../components/Text";
import { colors } from "../utils/style";
import Icon from "../components/Icon";

const MassiveHeader = styled(Text)`
  font-size: 10vmin;
`;

const Screen = styled(Container)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const FirstScreen = styled(Screen)`
  justify-content: flex-end;
`;

const CenterAlignedIcon = styled(Icon)`
  align-self: center;
`;

const SecondScreen = styled(Screen)``;

const HomePage = () => (
  <>
    <FirstScreen background={colors.red}>
      <MassiveHeader padding={"small"} component={"h1"} color="#FFF">
        Welcome to hackie.dev!
      </MassiveHeader>
      <CenterAlignedIcon
        name="ExpandMore"
        animation={"bounceY"}
        color="white"
        size={50}
      />
    </FirstScreen>
    <SecondScreen background={colors.blue}>
      <MassiveHeader padding="small" component={"h1"} color="#FFF">
        Buy us a beer!
      </MassiveHeader>
    </SecondScreen>
  </>
);

export default HomePage;
