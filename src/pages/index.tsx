import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Container from "../components/Container";
import Text from "../components/Text";
import { colors } from "../utils/style";
import Icon from "../components/Icon";
import MenuTabs from "../components/Tabs/TabsMenu";
import TeamProfile from "../components/TeamProfile";
import { cssFor } from "../utils/breakpoints";

const MassiveHeader = styled(Text)`
  font-size: 10vmin;
`;

const Screen = styled(Container)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const WelcomeScreen = styled(Screen)`
  justify-content: flex-end;
`;

const CenterAlignedIcon = styled(Icon)`
  align-self: center;
`;

const FormScreen = styled(Screen)``;

const TeamScreen = styled(Screen)``;

const TeamSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  ${cssFor.mobile`
    justify-content: center;
  `};
`;

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
            onClick: () => scrollToScreen("welcome-screen"),
          },
          { name: "Team", onClick: () => scrollToScreen("team-screen") },
          { name: "Form", onClick: () => scrollToScreen("form-screen") },
        ]}
      />
      <WelcomeScreen background={colors.red} id="welcome-screen">
        <MassiveHeader padding="small" component="h1" color="#FFF">
          Welcome to hackie.dev!
        </MassiveHeader>
        {displayScrollIcon && (
          <CenterAlignedIcon
            name="ExpandMore"
            animation="bounceY"
            color="white"
            size={50}
            onClick={() => scrollToScreen("team-screen")}
          />
        )}
      </WelcomeScreen>
      <TeamScreen background={colors.grey} id="team-screen">
        <MassiveHeader padding="small" component="h1" color="#000">
          Team
        </MassiveHeader>
        <TeamSection padding="small">
          <TeamProfile
            name="Oscar Blanco"
            description="Software/DevOps Engineer"
            avatarSrc="/oscar_mexican.jpeg"
            linkedIn="oscarblancocastan"
          />
          <TeamProfile
            name="Xavier Moreno"
            description="Fullstack Developer"
            avatarSrc="/xavi_himself.png"
            linkedIn="xavimorenom"
          />
          <TeamProfile
            name="Fernando García"
            description="React Expert"
            avatarSrc="/nando_miner.png"
            linkedIn="fernando-garcia-fernandez"
          />
        </TeamSection>
      </TeamScreen>
      <FormScreen background={colors.blue} id="form-screen">
        <MassiveHeader padding="small" component="h1" color="#FFF">
          Buy us a beer!
        </MassiveHeader>
      </FormScreen>
    </>
  );
};

export default HomePage;
