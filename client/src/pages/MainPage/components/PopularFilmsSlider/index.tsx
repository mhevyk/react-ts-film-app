import { QueryErrorBoundary } from "@suspensive/react-query";
import { Suspense } from "@suspensive/react";
import { PopulatFilmSliderErrorFallback as ErrorFallback } from "./components/PopularFilmSliderErrorFallback";
import { PopularFilmSliderLoadingFallback as LoadingFallback } from "./components/PopularFilmSliderLoadingFallback";
import { PopularFilmSlider as Slider } from "./components/PopularFilmSlider";

export function PopularFilmsSlider() {
  return (
    <QueryErrorBoundary fallback={ErrorFallback}>
      <Suspense fallback={<LoadingFallback />}>
        <Slider />
      </Suspense>
    </QueryErrorBoundary>
  );
}
