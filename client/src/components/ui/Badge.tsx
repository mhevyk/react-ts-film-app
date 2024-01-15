import styled from "styled-components";

const BadgeStyled = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundWithOpacity(0.6)};
  color: ${(props) => props.theme.colors.accent};
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 0 8px;
  cursor: default;
  width: fit-content; // used to prevent stretching elements to full width
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`;

type BadgeProps = {
  label: string;
};

export function Badge({ label }: BadgeProps) {
  return <BadgeStyled>{label}</BadgeStyled>;
}
