import { ReactNode } from "react";
import styled from "styled-components";

const ImageWrapper = styled.div<{ $iconSize: number }>`
  width: ${(props) => props.$iconSize}px;
  aspect-ratio: 1/1;
  padding: ${(props) =>
    props.$iconSize *
    (5 / 12)}px; // using 5/12 to increase padding proportionally to width
  border-radius: 50%;
  transition: all 200ms;
  cursor: pointer;
  user-select: none;

  &:hover {
    scale: 1.12;
    background-color: rgba(
      255,
      255,
      255,
      0.2
    ); // TODO: replace with theme color
  }
`;

type HoverableIconProps = {
  icon: ReactNode;
  size?: number;
  className?: string;
};

export function HoverableIcon({
  icon,
  size = 19.2,
  className,
}: HoverableIconProps) {
  return (
    <ImageWrapper $iconSize={size} className={className}>
      {icon}
    </ImageWrapper>
  );
}
