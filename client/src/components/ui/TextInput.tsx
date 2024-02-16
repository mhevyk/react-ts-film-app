import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  padding: 10px 16px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  outline: none;
  background-color: initial;
  border-radius: 26px 0 0 26px;
  color: ${(props) => props.theme.colors.white};
`;

type TextInputProps = ComponentPropsWithoutRef<"input">;

export function TextInput(props: TextInputProps) {
  return <InputStyled {...props} />;
}
