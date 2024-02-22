import { Button } from "@components/ui/Button";
import { ErrorBoundaryFallbackProps } from "@suspensive/react";

export function UpcomingFilmSliderErrorFallback(
  props: ErrorBoundaryFallbackProps
) {
  return (
    <>
      <Button variant="primary" onClick={props.reset}>
        Try again
      </Button>
      <p>{props.error.message}</p>
    </>
  );
}
