import { ComponentPropsWithoutRef, ElementType } from "react";

type PrefixWith$<T> = { [K in keyof T as `$${string & K}`]: T[K] };

export type StyledPick<T, K extends keyof T> = PrefixWith$<Pick<T, K>>;

export type AsProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

export type Expand<T> = T extends infer U ? { [K in keyof U]: U[K] } : never;
