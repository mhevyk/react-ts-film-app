import { ReactElement, cloneElement } from "react";

export function repeatComponent(component: ReactElement, times: number) {
  return Array.from({ length: times }, (_, index) =>
    cloneElement(component, { key: index })
  );
}
