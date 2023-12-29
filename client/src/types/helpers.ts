export type PrefixWith$<T> = { [K in keyof T as `$${string & K}`]: T[K] };
