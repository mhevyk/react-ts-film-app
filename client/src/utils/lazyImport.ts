import { lazy } from "react";

export function lazyImport<
  TComponent extends React.ComponentType<any>,
  TModuleList extends Record<TModuleKey, TComponent>,
  TModuleKey extends keyof TModuleList
>(factory: () => Promise<TModuleList>, name: TModuleKey) {
  return lazy(async () => {
    const module = await factory();
    return { default: module[name] };
  });
}
