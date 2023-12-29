import { ComponentProps, useEffect, useState } from "react";
import imagePlacholderSource from "@images/image-placeholder.jpg";

type ImageProps = Omit<ComponentProps<"img">, "src"> & {
  src: string;
};

export function LazyImage({ src, ...props }: ImageProps) {
  const [source, setSource] = useState(imagePlacholderSource);

  useEffect(() => {
    function handleLoad() {
      setSource(src);
    }

    const image = new Image();
    image.src = src;
    image.addEventListener("load", handleLoad);

    return () => {
      image.removeEventListener("load", handleLoad);
    };
  }, [src]);

  return <img src={source} loading="lazy" {...props} />;
}
