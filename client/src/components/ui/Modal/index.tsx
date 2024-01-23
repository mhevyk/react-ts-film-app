import {
  MouseEvent,
  PropsWithChildren,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styled, { css, keyframes } from "styled-components";
import { useLockPageScroll } from "./hooks/useLockPageScroll";

const showAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(min(100px, 5vh));
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const hideAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateY(0%);
  }
  to {
    opacity: 0;
    transform: translateY(min(100px, 5vh));
  }
`;

const fullscreenStyles = css`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  background-color: ${(props) => props.theme.colors.backgroundWithOpacity(0.9)};
`;

type ModalStyledProps = {
  $fullscreen: boolean;
  $isClosing: boolean;
};

const ModalStyled = styled.dialog<ModalStyledProps>`
  border-radius: 2px;
  border-width: 0;
  padding: 0;
  outline: 0;
  ${(props) => props.$fullscreen && fullscreenStyles}

  &[open] {
    animation: ${showAnimation} 250ms cubic-bezier(0.4, 0, 0.2, 1) forwards;

    ${(props) => {
      if (props.$isClosing) {
        return css`
          animation: ${hideAnimation} 150ms cubic-bezier(0.4, 0, 0.2, 1)
            forwards;
        `;
      }
    }}

    &::backdrop {
      background-color: ${(props) =>
        props.theme.colors.backgroundWithOpacity(0.9)};
      backdrop-filter: blur(2px);
      animation: none;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

type ModalProps = PropsWithChildren & {
  isOpen: boolean;
  onClose: () => void;
} & (
    | {
        fullscreen?: true;
        locked: true;
      }
    | {
        fullscreen?: false;
        locked?: boolean;
      }
  );

export function Modal({
  isOpen,
  locked = false,
  onClose: onDialogClose,
  fullscreen = false,
  children,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [shouldUnmount, setShouldUnmount] = useState(true);

  // overriding cancel event (when Esc is pressed) to close modal with animation
  const onDialogCancel = useCallback(
    (event: SyntheticEvent<HTMLDialogElement, Event>) => {
      event.preventDefault();
      if (locked) {
        return;
      }

      onDialogClose();
    },
    [locked, onDialogClose]
  );

  const onClickOutsideDialog = useCallback(
    (event: MouseEvent) => {
      if (locked || event.target !== dialogRef.current) {
        return;
      }

      onDialogClose();
    },
    [locked, onDialogClose]
  );

  const onDialogClosingAnimationEnd = useCallback(() => {
    if (isOpen) {
      return;
    }

    dialogRef.current?.close();
    setShouldUnmount(true);
  }, [isOpen, setShouldUnmount]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    dialogRef.current?.showModal();
    setShouldUnmount(false);
  }, [isOpen, setShouldUnmount]);

  useLockPageScroll(isOpen);

  if (!isOpen && shouldUnmount) {
    return null;
  }

  return createPortal(
    <ModalStyled
      ref={dialogRef}
      onClose={onDialogClose}
      onCancel={onDialogCancel}
      onClick={onClickOutsideDialog}
      onAnimationEnd={onDialogClosingAnimationEnd}
      $fullscreen={fullscreen}
      $isClosing={!isOpen}
    >
      <ContentWrapper>{children}</ContentWrapper>
    </ModalStyled>,
    document.querySelector<HTMLDivElement>("#modal-container")!
  );
}
