import chevronRightIcon from "@icons/chevron-right.svg";
import { StyledPick } from "@type-helpers";
import { ComponentPropsWithoutRef } from "react";
import styled, { css } from "styled-components";

type IconStyledProps = StyledPick<ChevronRightIconProps, "size">;

const IconStyled = styled.img<IconStyledProps>`
  ${(props) => {
    if (props.$size) {
      return css`
        width: ${props.$size}px;
        aspect-ratio: 1 / 1;
      `;
    }
  }}
`;

type ChevronRightIconProps = {
  size?: number;
} & ComponentPropsWithoutRef<"img">;

export function ChevronRightIcon({ size, ...rest }: ChevronRightIconProps) {
  return (
    <IconStyled
      src={chevronRightIcon}
      $size={size}
      alt="Chevron right icon"
      {...rest}
    />
  );
}
