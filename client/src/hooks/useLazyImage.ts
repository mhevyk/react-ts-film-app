import imagePlaceholderSource from "@icons/placeholder-image.svg";
import { useEffect, useState } from "react";

export function useLazyImage(src: string) {
  const [source, setSource] = useState(imagePlaceholderSource);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    function handleLoad() {
      setTimeout(() => {
        setSource(src);
      }, 5000);
    }

    function handleError() {
      setIsError(true);
    }

    const image = new Image();
    image.src = src;
    image.addEventListener("load", handleLoad);
    image.addEventListener("error", handleError);

    return () => {
      image.removeEventListener("load", handleLoad);
      image.removeEventListener("error", handleError);
    };
  }, [src]);

  const isLoading = imagePlaceholderSource === source && !isError;

  return [source, { isLoading, isError }] as const;
}
