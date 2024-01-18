import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { StyledPick } from "src/types/helpers";
import styled, { RuleSet } from "styled-components";

type ListProps = StyledPick<StyledMenuProps, "direction" | "wrapperStyles">;

const List = styled.ul<ListProps>`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  ${(props) => props.$wrapperStyles};
`;

export type MenuItemBase = {
  path: string;
};

type StyledMenuProps = {
  direction?: "row" | "column";
  wrapperStyles?: RuleSet;
};

type MenuProps<TItem extends MenuItemBase> = {
  items: TItem[];
  renderItem: (item: TItem) => ReactNode;
} & StyledMenuProps;

export function Menu<TItem extends MenuItemBase>({
  items,
  renderItem,
  direction = "row",
  wrapperStyles,
}: MenuProps<TItem>) {
  return (
    <List $direction={direction} $wrapperStyles={wrapperStyles}>
      {items.map((item, index) => (
        <li key={index}>
          <Link to={item.path}>{renderItem(item)}</Link>
        </li>
      ))}
    </List>
  );
}
