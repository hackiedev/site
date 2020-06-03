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
  -webkit-overflow-scrolling: touch;
  color: ${colors.white};
  font-weight: 500;
  transition: 200ms all;
  cursor: pointer;
  border-radius: 4em;
  &:hover {
    background: ${colors.grey};
    color: ${colors.black};
  }
`;

const Tab = ({ tab }: Props) => {
  return (
    <TabWrapper padding="small" component="a" onClick={tab.onClick}>
      {tab.name}
    </TabWrapper>
  );
};

export default Tab;
