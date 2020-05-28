import React from "react";
import styled from "styled-components";
import Container from "../Container";

import Tab, { ITab } from "./Tab";
import { separationSizes } from "../../utils/style";

interface Props {
  tabs: ITab[];
}

const TabsContainer = styled(Container)`
  position: fixed;
  top: ${separationSizes.default};
  right: ${separationSizes.default};
`;

const MenuTabs = ({ tabs }: Props) => {
  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <Tab key={tab.name} tab={tab} />
      ))}
    </TabsContainer>
  );
};

export default MenuTabs;
