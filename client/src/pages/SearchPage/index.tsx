import { useSearchParams } from "react-router-dom";
import { InfiniteFilmGrid } from "./components/InfiniteFilmGrid";

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("q") ?? "";

  return (
    <>
      <InfiniteFilmGrid searchValue={searchValue} />
    </>
  );
}
