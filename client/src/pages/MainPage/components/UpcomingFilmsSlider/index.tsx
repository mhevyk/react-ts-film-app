import { QueryErrorBoundary } from "@suspensive/react-query";
import { Suspense } from "@suspensive/react";
import { UpcomingFilmSliderErrorFallback as ErrorFallback } from "./components/UpcomingFilmSliderErrorFallback";
import { UpcomingFilmSliderLoadingFallback as LoadingFallback } from "./components/UpcomingFilmSliderLoadingFallback";
import { UpcomingFilmSlider as Slider } from "./components/UpcomingFilmSlider";

export function UpcomingFilmsSlider() {
  return (
    <QueryErrorBoundary fallback={ErrorFallback}>
      <Suspense fallback={<LoadingFallback />}>
        <Slider />
      </Suspense>
    </QueryErrorBoundary>
  );
}
