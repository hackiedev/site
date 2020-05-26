import React from "react";
import styled from "styled-components";

import Container from "../components/Container";
import Text from "../components/Text";

const MassiveHeader = styled(Text)`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 10em;
`;

const HomePage = () => (
  <Container padding={"small"} fill background={"#F40F49"}>
    <MassiveHeader padding={"small"} component={"h1"} color="#FFF">
      Welcome to hackie.dev!
    </MassiveHeader>
  </Container>
);

export default HomePage;
