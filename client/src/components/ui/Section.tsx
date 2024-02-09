import { PropsWithChildren } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@components/styled/ChevronRightIcon";

const TitleWrapperLink = styled(Link)`
  display: inline-flex;
  gap: 8px;
  padding: 24px 0 24px 32px;
`;

const Title = styled.h5`
  margin: 0;
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

type SectionProps = PropsWithChildren & {
  title: string;
  navigatesTo: string;
};

export function Section({ title, navigatesTo, children }: SectionProps) {
  return (
    <section>
      <TitleWrapperLink to={navigatesTo}>
        <Title>{title}</Title>
        <ChevronRightIcon size={24} />
      </TitleWrapperLink>
      {children}
    </section>
  );
}
