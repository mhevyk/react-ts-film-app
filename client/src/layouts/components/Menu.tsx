import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactElement, cloneElement } from "react";
import { HoverableIcon } from "@components/ui/HoverableIcon";
import { PrefixWith$ } from "src/types/helpers";

type ListStyledProps = PrefixWith$<Pick<MenuProps, "direction" | "gap">>;

const List = styled.ul<ListStyledProps>`
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
            <HoverableIcon
              icon={cloneElement(menuItem.icon, { loading: "lazy" })}
              size={iconSize}
            />
          </Link>
        </li>
      ))}
    </List>
  );
}
