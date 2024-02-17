import { ComponentPropsWithoutRef } from "react";

// NOTE: using this helper component because styled components do not support "search" element
export function SearchContainer(props: ComponentPropsWithoutRef<"search">) {
  return <search {...props} />;
}
