import { media } from "@theme/mediaQueries";
import { useEffect, useState } from "react";

export function checkMediaQueryMatches(query: string) {
  return window.matchMedia(query).matches;
}

type UseMediaQuerySelector = ((state: typeof media) => string) | string;

export function useMediaQuery(selector: UseMediaQuerySelector) {
  const query = typeof selector === "function" ? selector(media) : selector;
  const [matches, setMatches] = useState(checkMediaQueryMatches(query));

  function handleChange() {
    setMatches(checkMediaQueryMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}
