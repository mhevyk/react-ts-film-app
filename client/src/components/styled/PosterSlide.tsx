import { Slide } from "@components/ui/Slider";
import styled, { RuleSet, css } from "styled-components";

type PosterSlideProps = {
  $isLoading?: boolean;
  $isError?: boolean;
  $css?: RuleSet;
};

export const PosterSlide = styled(Slide)<PosterSlideProps>`
  padding: 0 24px 24px;
  overflow: hidden;

  ${(props) => {
    if (props.$isLoading || props.$isError) {
      return css`
        display: flex;
        flex-direction: column;
        justify-content: ${props.$isError ? "center" : "flex-end"};
        gap: 16px;
        background-color: ${props.theme.colors.lightWithOpacity(0.15)};
      `;
    }
  }}

  ${(props) => {
    if (props.$isError) {
      return css`
        align-items: center;
        color: ${props.theme.colors.white};
        font-size: 20px;
      `;
    }
  }}

  ${(props) => props.$css};
`;
