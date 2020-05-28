import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Container from "../components/Container";
import Text from "../components/Text";
import { colors } from "../utils/style";
import Icon from "../components/Icon";
import MenuTabs from "../components/Tabs/TabsMenu";

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

const HomePage = () => {
  const [displayScrollIcon, setDisplayScrollIcon] = useState(true);

  const scrollToScreen = (screenID: string) => {
    window.scrollTo({
      behavior: "smooth",
      top: document.getElementById(screenID).offsetTop,
    });
    if (displayScrollIcon) setDisplayScrollIcon(false);
  };

  return (
    <>
      <MenuTabs
        tabs={[
          {
            name: "Welcome",
            onClick: () => scrollToScreen("first-screen"),
          },
          { name: "Beer", onClick: () => scrollToScreen("second-screen") },
        ]}
      />
      <FirstScreen background={colors.red} id="first-screen">
        <MassiveHeader padding="small" component={"h1"} color="#FFF">
          Welcome to hackie.dev!
        </MassiveHeader>
        {displayScrollIcon && (
          <CenterAlignedIcon
            name="ExpandMore"
            animation="bounceY"
            color="white"
            size={50}
            onClick={() => scrollToScreen("second-screen")}
          />
        )}
      </FirstScreen>
      <SecondScreen background={colors.blue} id="second-screen">
        <MassiveHeader padding="small" component="h1" color="#FFF">
          Buy us a beer!
        </MassiveHeader>
      </SecondScreen>
    </>
  );
};

export default HomePage;
