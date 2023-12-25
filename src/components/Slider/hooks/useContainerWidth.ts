import { debounce } from "@utils/debounce";
import { RefObject, useEffect, useState } from "react";

export function useContainerWidth<T extends HTMLElement | null>(
  containerRef: RefObject<T>
) {
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const debouncedHandleResize = debounce((entries: ResizeObserverEntry[]) => {
      setContainerWidth(entries[0].contentRect.width);
    });

    const resizeObserver = new ResizeObserver(debouncedHandleResize);

    const container = containerRef.current;

    if (container) {
      resizeObserver.observe(container);
      setContainerWidth(container.clientWidth);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return containerWidth;
}
