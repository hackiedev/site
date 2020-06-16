import React from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { colors } from "../utils/style";

interface Props {
  label: string;
  value?: any;
  onChange?: (newValue: string) => void;
  multiline?: boolean;
  rows?: number;
  color?: keyof typeof colors;
  activeColor?: keyof typeof colors;
}

const StyledInput = styled(TextField)`
  label {
    color: ${(props: Props) => colors[props.activeColor]};
  }

  input,
  textarea {
    color: ${(props: Props) => colors[props.activeColor]};
  }

  && div {
    &:before,
    &:after {
      border-bottom-color: ${(props: Props) => colors[props.color]};
      border-width: 1px;
    }
    &:hover,
    &:active,
    &:focus-within {
      &:before,
      &:after {
        border-bottom-color: ${(props: Props) => colors[props.activeColor]};
        border-width: 1px;
      }
    }
  }

  &:hover,
  &:active,
  &:focus-within {
    label {
      color: ${(props: Props) => colors[props.activeColor]};
    }
  }
  width: 100%;
`;

const Input = ({ label, value, onChange, ...rest }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return (
    <StyledInput
      label={label}
      value={value}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default Input;
