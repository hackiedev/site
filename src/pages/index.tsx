import React from "react";
import styled from "styled-components";

import Container from "../components/Container";
import Text from "../components/Text";
import { colors } from "../utils/style";

const MassiveHeader = styled(Text)`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 10em;
`;

const HomePage = () => (
  <Container padding={"small"} fill background={colors.red}>
    <MassiveHeader padding={"small"} component={"h1"} color="#FFF">
      Welcome to hackie.dev!
    </MassiveHeader>
  </Container>
);

export default HomePage;
