import React from "react";
import styled from "styled-components";

import Container from "../components/Container";
import Text from "../components/Text";
import { colors } from "../utils/style";

const MassiveHeader = styled(Text)`
  font-size: 10em;
`;

const Screen = styled(Container)`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

const FirstScreen = styled(Screen)`
  justify-content: flex-end;
`;

const SecondScreen = styled(Screen)``;

const HomePage = () => (
  <>
    <FirstScreen padding={"small"} background={colors.red}>
      <MassiveHeader padding={"small"} component={"h1"} color="#FFF">
        Welcome to hackie.dev!
      </MassiveHeader>
    </FirstScreen>
    <SecondScreen padding={"small"} background={colors.blue}>
      <MassiveHeader padding={"small"} component={"h1"} color="#FFF">
        Buy us a beer!
      </MassiveHeader>
    </SecondScreen>
  </>
);

export default HomePage;
