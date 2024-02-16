import styled, { css, keyframes } from "styled-components";
import { StyledPick } from "@type-helpers";
import { Fragment, ReactElement } from "react";

const skeletonAnimation = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
`;

const SkeletonStyled = styled.div<StyledPick<SkeletonProps, "width">>`
  background: ${(props) => props.theme.colors.light};
  border-radius: 0.5rem;
  height: 0.9em;
  animation: ${skeletonAnimation} 1s infinite alternate ease-in-out;
  ${(props) => {
    if (props.$width) {
      return css`
        width: ${props.$width}px;
      `;
    }
  }}
`;

const SkeletonButton = styled(SkeletonStyled)`
  max-width: 200px;
  height: 3em;
  border-radius: 26px;
`;

const SkeletonInput = styled(SkeletonStyled)`
  height: 2.25em;
  border: 2px solid black;
`;

const SkeletonBadge = styled(SkeletonStyled)`
  width: 4em;
  height: 1.2em;
  border-radius: 0 8px;
`;

const SkeletonParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6em;
`;

const SkeletonParagraph = styled(SkeletonStyled)`
  & + &:last-child {
    width: 75%;
  }
`;

const SkeletonHeading = styled(SkeletonParagraph)`
  max-width: 18em;
  height: 2.5em;
`;

type ParagraphProps = {
  lines: number;
};

function Paragraph({ lines = 3 }: ParagraphProps) {
  return (
    <SkeletonParagraphContainer>
      {Array.from({ length: lines }, (_, index) => (
        <SkeletonParagraph key={index} />
      ))}
    </SkeletonParagraphContainer>
  );
}

type SkeletonProps = {
  width?: number;
};

export function Skeleton({ width }: SkeletonProps) {
  return <SkeletonStyled $width={width} />;
}

type SkeletonListProps = {
  amount: number;
  children: ReactElement;
};

function SkeletonList({ amount, children }: SkeletonListProps) {
  return Array.from({ length: amount }, (_, index) => (
    <Fragment key={index}>{children}</Fragment>
  ));
}

Skeleton.Button = SkeletonButton;
Skeleton.Input = SkeletonInput;
Skeleton.Badge = SkeletonBadge;
Skeleton.Paragraph = Paragraph;
Skeleton.Heading = SkeletonHeading;
Skeleton.List = SkeletonList;
