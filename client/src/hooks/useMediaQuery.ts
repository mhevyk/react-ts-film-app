import { useEffect, useState } from "react";

export function checkMediaQueryMatches(query: string) {
  return window.matchMedia(query).matches;
}

export function useMediaQuery(query: string) {
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
