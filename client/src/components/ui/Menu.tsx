import { StyledPick } from "@type-helpers";
import { Key, ReactNode } from "react";
import styled, { css } from "styled-components";

const List = styled.ul<StyledPick<ListStyleProps, "direction" | "gap">>`
  display: flex;
  flex-direction: ${(props) => props.$direction};

  ${(props) => {
    if (props.$gap) {
      return css`
        gap: ${props.$gap}px;
      `;
    }
  }}
`;

type ListStyleProps = {
  direction: "row" | "column";
  gap: number;
};

type MenuProps<TItem> = {
  items: TItem[];
  renderItem: (item: TItem) => ReactNode;
  getKey?: (item: TItem) => Key;
  listStyle?: Partial<ListStyleProps>;
};

const DEFAULT_LIST_STYLE: ListStyleProps = {
  direction: "row",
  gap: 20,
};

export function Menu<TItem>({
  items,
  renderItem,
  getKey,
  listStyle = {},
}: MenuProps<TItem>) {
  const { direction, gap } = { ...DEFAULT_LIST_STYLE, ...listStyle };

  return (
    <nav>
      <List $direction={direction} $gap={gap}>
        {items.map((item, index) => (
          <li key={getKey?.(item) ?? index}>{renderItem(item)}</li>
        ))}
      </List>
    </nav>
  );
}
