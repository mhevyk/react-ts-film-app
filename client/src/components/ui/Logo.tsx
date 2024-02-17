import logoImage from "@icons/logo.svg";
import { StyledPick } from "@type-helpers";
import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

const Image = styled.img<StyledPick<LogoProps, "size">>`
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  cursor: pointer;
`;

type LogoProps = { size?: number } & ComponentPropsWithoutRef<"img">;

export function Logo({ size = 50, ...rest }: LogoProps) {
  return <Image src={logoImage} $size={size} alt="Logo" {...rest} />;
}
