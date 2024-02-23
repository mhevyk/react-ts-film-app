import { useLazyImage } from "@hooks/useLazyImage";
import { Icon } from "@iconify/react";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import styled, { css } from "styled-components";

type ImageWrapperProps = {
  $isLoading: boolean;
  $isError: boolean;
  $aspectRatio: string;
  $wrapperStyles?: string;
};

const noImageStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-transform: uppercase;
  font-weight: 500;
  padding: 0 20px;
  text-align: center;
  & > img {
    width: 55px;
    height: 55px;
  }
`;

const ImageWrapper = styled.div<ImageWrapperProps>`
  aspect-ratio: ${(props) => props.$aspectRatio};
  background-color: ${(props) => {
    if (props.$isLoading) {
      return props.theme.colors.lightWithOpacity(0.15);
    }

    if (props.$isError) {
      return "#d04949";
    }

    return "transparent";
  }};
  color: ${(props) =>
    props.$isLoading || props.$isError ? props.theme.colors.dark : "inherit"};

  ${(props) => {
    if (props.$isLoading || props.$isError) {
      return noImageStyles;
    }
  }}

  ${(props) => props.$wrapperStyles};
`;

const ImageStyled = styled.img<{ $aspectRatio: string }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: ${(props) => props.$aspectRatio};
`;

type ImageProps = Omit<
  ComponentPropsWithoutRef<"img">,
  "src" | "width" | "height"
> & {
  src: string;
  aspectRatio: string;
  wrapperStyles?: string;
};

export function Image({
  src,
  aspectRatio,
  wrapperStyles,
  ...rest
}: ImageProps) {
  const [source, { isLoading, isError }] = useLazyImage(src);

  let imageElement: ReactNode;

  if (isError) {
    imageElement = (
      <>
        <Icon icon="tdesign:image-error" fontSize={55} />
        <p>Failed to load image</p>
      </>
    );
  } else if (isLoading) {
    imageElement = (
      <>
        <Icon icon="tdesign:image" fontSize={55} />
        <p>Loading image...</p>
      </>
    );
  } else {
    imageElement = (
      <ImageStyled src={source} $aspectRatio={aspectRatio} {...rest} />
    );
  }

  return (
    <ImageWrapper
      data-img-wrapper
      $aspectRatio={aspectRatio}
      $isLoading={isLoading}
      $isError={isError}
      $wrapperStyles={wrapperStyles}
    >
      {imageElement}
    </ImageWrapper>
  );
}
