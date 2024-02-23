import { useSearchParams } from "react-router-dom";
import { InfiniteFilmGrid } from "./components/InfiniteFilmGrid";
import { Suspense } from "@suspensive/react";
import { InfiniteFilmGridLoadingFallback } from "./components/InfiniteFilmGridLoadingFallback";
import { ResponsiveGrid } from "@layouts/ReponsiveGrid";

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("q") ?? "";

  /* TODO: Add error fallback */
  return (
    <ResponsiveGrid minWidth="250px" gap="35px" style={{ padding: "20px" }}>
      <Suspense fallback={<InfiniteFilmGridLoadingFallback />}>
        <InfiniteFilmGrid searchValue={searchValue} />
      </Suspense>
    </ResponsiveGrid>
  );
}
