import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  padding: 12px 16px;
  border: 1px solid ${(props) => props.theme.colors.lightWithOpacity(0.2)};
  outline: none;
  background-color: ${(props) => props.theme.colors.backgroundWithOpacity(0.5)};
  border-radius: 15px;
  color: ${(props) => props.theme.colors.white};
  letter-spacing: 1px;

  &::placeholder {
    font-family: inherit;
  }
`;

type TextInputProps = ComponentPropsWithoutRef<"input">;

export function TextInput(props: TextInputProps) {
  return <InputStyled {...props} />;
}
