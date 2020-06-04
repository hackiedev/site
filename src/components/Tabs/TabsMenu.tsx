import React from "react";
import styled from "styled-components";
import Container from "../Container";

import Tab, { ITab } from "./Tab";
import { separationSizes, colors } from "../../utils/style";

interface Props {
  tabs: ITab[];
  color: keyof typeof colors;
}

const TabsContainer = styled(Container)`
  position: fixed;
  top: ${separationSizes.default};
  right: ${separationSizes.default};
`;

const TabsMenu = ({ tabs, color }: Props) => (
  <TabsContainer>
    {tabs.map((tab) => (
      <Tab key={tab.name} tab={tab} color={color} />
    ))}
  </TabsContainer>
);

export default TabsMenu;
