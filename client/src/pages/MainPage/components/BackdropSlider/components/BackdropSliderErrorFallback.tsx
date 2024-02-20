import { Button } from "@components/ui/Button";
import { ErrorBoundaryFallbackProps } from "@suspensive/react";
import { BackdropSlide } from "../styled/BackdropSlide";

export function BackdropSliderErrorFallback(props: ErrorBoundaryFallbackProps) {
  return (
    <BackdropSlide>
      <Button variant="primary" onClick={props.reset}>
        Try again
      </Button>
      <p>{props.error.message}</p>
    </BackdropSlide>
  );
}
