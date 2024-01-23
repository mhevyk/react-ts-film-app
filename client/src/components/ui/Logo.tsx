import logoImage from "@icons/logo.svg";
import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

type LogoProps = ComponentPropsWithoutRef<"img">;

export function Logo(props: LogoProps) {
  return <Image src={logoImage} alt="Logo" {...props} />;
}
