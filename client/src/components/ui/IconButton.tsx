import {
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
} from "react";
import styled from "styled-components";

type IconButtonStyledProps = {
  $iconSize: number;
};

const IconButtonStyled = styled.button<IconButtonStyledProps>`
  padding: ${(props) =>
    props.$iconSize *
    (5 / 12)}px; // using 5/12 to increase padding proportionally to width */
  border-radius: 50%;
  transition: all 200ms;
  cursor: pointer;
  user-select: none;
  background-color: unset;
  border: 0;

  & > :first-child {
    width: ${(props) => props.$iconSize}px;
    height: ${(props) => props.$iconSize}px;
  }

  &:hover {
    scale: 1.12;
    background-color: ${(props) => props.theme.colors.whiteWithOpacity(0.2)};
  }
`;

type HoverableIconProps = {
  icon: ReactNode;
  size?: number;
} & ComponentPropsWithoutRef<"button">;

export const IconButton = forwardRef<
  ElementRef<typeof IconButtonStyled>,
  HoverableIconProps
>(({ icon, size = 24, ...props }, ref) => {
  return (
    <IconButtonStyled $iconSize={size} ref={ref} {...props}>
      {icon}
    </IconButtonStyled>
  );
});
