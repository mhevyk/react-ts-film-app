import { PrefixWith$ } from "../../types/helpers";
import {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
  useId,
} from "react";
import styled, { css } from "styled-components";

const BORDER_RADIUS = "26px";
const DEFAULT_TYPE: ElementType = "button";

type ButtonStyledProps = PrefixWith$<
  Pick<SharedButtonProps, "variant" | "outlined">
>;

const baseButtonStyles = css`
  --hover-transition: all 500ms;
  position: relative;
  z-index: 20;
  text-align: center;
  padding: 16px;
  cursor: pointer;
  max-width: 200px;
  font-size: 1.15em;
  line-height: 24px;
  color: white;
  transition: var(--hover-transition);
`;

const gradientButtonStyles = css<Pick<ButtonStyledProps, "$outlined">>`
  border: none;
  background-color: transparent;
  z-index: 21;

  svg {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    z-index: -1;

    .btn-fill {
      opacity: ${({ $outlined }) => ($outlined ? 0 : 1)};
      transition: var(--hover-transition);
    }
  }

  &:hover {
    .btn-fill {
      opacity: ${({ $outlined }) => ($outlined ? 1 : 0)};
    }
  }
`;

const ButtonStyled = styled(DEFAULT_TYPE)<ButtonStyledProps>`
  ${baseButtonStyles}

  ${({ $variant, $outlined, theme }) => {
    if ($variant === "gradient") {
      return gradientButtonStyles;
    }

    const buttonColor = theme.colors[$variant];

    return css`
      border-radius: ${BORDER_RADIUS};
      background-color: ${$outlined ? "transparent" : buttonColor};
      border: 1px solid ${$outlined ? buttonColor : "transparent"};

      &:hover {
        background-color: ${$outlined ? buttonColor : "transparent"};
        border: 1px solid ${$outlined ? "transparent" : buttonColor};
      }
    `;
  }}
`;

type ButtonVariant = "primary" | "secondary" | "gradient";

type SharedButtonProps = {
  variant: ButtonVariant;
  outlined?: boolean;
};

type AsProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

type ButtonProps<T extends ElementType> = PropsWithChildren &
  SharedButtonProps &
  AsProps<T>;

export function Button<T extends ElementType = typeof DEFAULT_TYPE>({
  variant,
  outlined,
  as,
  children,
  ...props
}: ButtonProps<T>) {
  return (
    <ButtonStyled as={as} $variant={variant} $outlined={outlined} {...props}>
      {variant === "gradient" && <ButtonGradient />}
      {children}
    </ButtonStyled>
  );
}

function ButtonGradient() {
  const BORDER_WIDTH = "1px";
  const id = useId();

  return (
    <svg>
      <defs>
        <linearGradient
          id={`gradient-${id}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop stopColor="#0FEFFD" offset="0%"></stop>
          <stop stopColor="#FF00F5" offset="78%"></stop>
          <stop stopColor="#0FEFFD38" offset="100%"></stop>
        </linearGradient>
      </defs>
      <rect
        fill="none"
        stroke={`url(#gradient-${id})`}
        width="98%"
        height="95%"
        rx={BORDER_RADIUS}
        strokeWidth={BORDER_WIDTH}
        x="1"
        y="1"
      />
      <rect
        className="btn-fill"
        fill={`url(#gradient-${id})`}
        width="98%"
        height="95%"
        rx={BORDER_RADIUS}
        x="1"
        y="1"
      />
    </svg>
  );
}
