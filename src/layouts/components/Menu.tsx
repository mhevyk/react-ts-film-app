import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactElement, cloneElement } from "react";

const ImageWrapper = styled.div<{ $iconSize: number }>`
  width: ${(props) => props.$iconSize}px;
  aspect-ratio: 1/1;
  padding: 8px;
  border-radius: 50%;
  transition: all 200ms;

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

type ListStyledProps = Pick<MenuProps, "direction" | "gap">;
type ListProps = {
  [K in keyof ListStyledProps as `$${string & K}`]: ListStyledProps[K];
};

const List = styled.ul<ListProps>`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  gap: ${(props) => props.$gap}px;
`;

export type MenuItem = {
  path: string;
  icon: ReactElement;
};

type MenuProps = {
  items: MenuItem[];
  direction?: "row" | "column";
  gap: number;
  iconSize?: number;
};

export function Menu({
  items,
  direction = "row",
  gap,
  iconSize = 19.2,
}: MenuProps) {
  return (
    <List $direction={direction} $gap={gap}>
      {items.map((menuItem, index) => (
        <li key={index}>
          <Link to={menuItem.path}>
            <ImageWrapper $iconSize={iconSize}>
              {cloneElement(menuItem.icon, { loading: "lazy" })}
            </ImageWrapper>
          </Link>
        </li>
      ))}
    </List>
  );
}
