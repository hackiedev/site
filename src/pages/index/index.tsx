import React, { useEffect, useState, ReactNode, ReactChildren } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

import Container from "../../components/Container";
import Text from "../../components/Text";
import { colors } from "../../utils/style";
import Icon from "../../components/Icon";
import TabsMenu from "../../components/Tabs/TabsMenu";
import TeamProfile from "../../components/TeamProfile";
import { cssFor } from "../../utils/breakpoints";
import ContactUs from "../../components/pages/index/ContactUs";

const MassiveHeader = styled(Text)`
  font-size: 10vmin;
`;

const Screen = styled(Container)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

interface VisibleScreenProps {
  children: ReactNode;
  threshold?: number;
  onVisible: (isVisible: boolean) => void;
}

const VisibleScreen = ({
  children,
  onVisible,
  threshold = 0.97,
  ...rest
}: VisibleScreenProps) => {
  const [ref, inView] = useInView({
    threshold: threshold,
  });
  useEffect(() => {
    onVisible && onVisible(inView);
  }, [inView]);
  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
};

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
  const [tabsColor, setTabsColor] = useState(colors.white);

  const scrollToScreen = (screenID: string) => {
    window.scrollTo({
      behavior: "smooth",
      top: document.getElementById(screenID).offsetTop,
    });
    if (displayScrollIcon) setDisplayScrollIcon(false);
  };

  return (
    <>
      <TabsMenu
        color={tabsColor as keyof typeof colors}
        tabs={[
          {
            name: "Welcome",
            onClick: () => scrollToScreen("welcome-screen"),
          },
          { name: "Team", onClick: () => scrollToScreen("team-screen") },
          { name: "Hire us", onClick: () => scrollToScreen("hire-us-screen") },
        ]}
      />
      <VisibleScreen
        threshold={0.02}
        onVisible={(isVisible: boolean) => {
          setTabsColor(isVisible ? colors.white : colors.black);
        }}
      >
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
      </VisibleScreen>
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
      <VisibleScreen
        onVisible={(isVisible: boolean) => {
          setTabsColor(isVisible ? colors.white : colors.black);
        }}
      >
        <FormScreen background={colors.blue} id="hire-us-screen">
          <ContactUs />
        </FormScreen>
      </VisibleScreen>
    </>
  );
};

export default HomePage;
