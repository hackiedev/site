import React from "react";
import styled from "styled-components";
import Text from "../Text";
import { colors } from "../../utils/style";

export interface ITab {
  name: string;
  onClick: () => void;
}

interface Props {
  tab: ITab;
}

const TabWrapper = styled(Text)`
  color: ${colors.white};
  font-weight: 500;
  text-decoration: none;
  transition: 200ms all;
  &:hover {
    background: ${colors.grey};
    color: ${colors.black};
    border-radius: 4em;
  }
`;

const Tab = ({ tab }: Props) => {
  return (
    <TabWrapper
      padding="small"
      href="javascript:void(0)"
      component="a"
      onClick={tab.onClick}
    >
      {tab.name}
    </TabWrapper>
  );
};

export default Tab;
