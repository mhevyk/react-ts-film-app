import { ComponentProps, useEffect, useState } from "react";
import styled, { RuleSet, css } from "styled-components";
import imagePlaceholderSource from "@icons/placeholder-image.svg";
import { StyledPick } from "@type-helpers";

type ImageWrapperProps = StyledPick<
  LazyImageContainerProps,
  "imageWrapperStyles"
>;

const ImageWrapper = styled.div<ImageWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #505050;
  width: 100%;
  height: 100%;

  ${(props) => props.$imageWrapperStyles};
`;

type ImageStyledProps = StyledPick<
  LazyImageContainerProps,
  "imageLoadingStyles" | "imageLoadedStyles"
> & {
  $isLoading: boolean;
};

const ImageStyled = styled.img<ImageStyledProps>`
  ${(props) => {
    if (props.$isLoading) {
      return css`
        width: 60px;
        ${props.$imageLoadingStyles};
      `;
    }

    return css`
      width: 100%;
      height: 100%;
      object-fit: cover;
      ${props.$imageLoadedStyles};
    `;
  }}
`;

type LazyImageContainerProps = Omit<ComponentProps<"img">, "src"> & {
  src: string;
  imageWrapperStyles?: RuleSet;
  imageLoadingStyles?: RuleSet;
  imageLoadedStyles?: RuleSet;
};

export function LazyImageContainer({
  src,
  imageWrapperStyles,
  imageLoadingStyles,
  imageLoadedStyles,
  ...rest
}: LazyImageContainerProps) {
  const [source, { isLoading }] = useLazyImage(src);

  return (
    <ImageWrapper $imageWrapperStyles={imageWrapperStyles}>
      <ImageStyled
        src={source}
        $isLoading={isLoading}
        $imageLoadingStyles={imageLoadingStyles}
        $imageLoadedStyles={imageLoadedStyles}
        {...rest}
      />
    </ImageWrapper>
  );
}

export function useLazyImage(src: string) {
  const [source, setSource] = useState(imagePlaceholderSource);

  useEffect(() => {
    function handleLoad() {
      setSource(src);
    }

    const image = new Image();
    image.src = src;
    image.addEventListener("load", handleLoad);

    return () => {
      image.removeEventListener("load", handleLoad);
    };
  }, [src]);

  return [source, { isLoading: imagePlaceholderSource === source }] as const;
}
