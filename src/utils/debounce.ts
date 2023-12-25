type Timeout = ReturnType<typeof setTimeout>;

export function debounce<TFunction extends (...args: any[]) => any>(
  callback: TFunction,
  delay?: number
) {
  let timeout: Timeout;

  return (...args: Parameters<TFunction>) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback(...args);
    }, delay ?? 400);
  };
}
