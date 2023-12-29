import styled from "styled-components";

const BadgeStyled = styled.div`
  background-color: ${({ theme }) =>
    `rgba(${theme.colors.backgroundRGB}, 0.6)`};
  color: ${({ theme }) => theme.colors.accent};
  font-size: 14px;
  line-height: 16px;
  padding: 4px 8px;
  border-radius: 0 8px;
  text-align: center;
  width: fit-content;
  cursor: default;

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
