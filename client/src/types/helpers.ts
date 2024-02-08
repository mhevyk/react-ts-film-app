import { ComponentPropsWithoutRef, ElementType } from "react";

export type PrefixWith$<T> = { [K in keyof T as `$${string & K}`]: T[K] };

export type StyledPick<T, K extends keyof T> = PrefixWith$<Pick<T, K>>;

export type Expand<T> = Record<keyof T, T>;

export type AsProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;
