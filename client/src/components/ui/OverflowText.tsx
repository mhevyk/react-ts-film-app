import { AsProps } from "@type-helpers";
import { ElementType } from "react";
import styled from "styled-components";

const TextStyled = styled.p<{ $lines: number }>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => props.$lines};
  line-clamp: ${(props) => props.$lines};
  overflow: hidden;
`;

type OverflowTextProps<TElement extends ElementType> = AsProps<TElement> & {
  lines: number;
};

export function OverflowText<TElement extends ElementType>({
  lines,
  as,
  ...rest
}: OverflowTextProps<TElement>) {
  return <TextStyled as={as} $lines={lines} {...rest} />;
}
