import { Suspense } from "@suspensive/react";
import { QueryErrorBoundary } from "@suspensive/react-query";
import { BackdropSliderErrorFallback } from "./components/BackdropSliderErrorFallback";
import { BackdropSliderLoadingFallback } from "./components/BackdropSliderLoadingFallback";
import { BackdropSlider as BackdropFilmSlider } from "./components/BackdropSlider";

export function BackdropSlider() {
  return (
    <QueryErrorBoundary fallback={BackdropSliderErrorFallback}>
      <Suspense fallback={<BackdropSliderLoadingFallback />}>
        <BackdropFilmSlider />
      </Suspense>
    </QueryErrorBoundary>
  );
}
