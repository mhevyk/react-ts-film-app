import { useEffect } from "react";

export function useLockPageScroll(condition: boolean) {
  useEffect(() => {
    const className = "lock-scroll";

    if (condition) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }

    return () => {
      document.body.classList.remove(className);
    };
  }, [condition]);
}
