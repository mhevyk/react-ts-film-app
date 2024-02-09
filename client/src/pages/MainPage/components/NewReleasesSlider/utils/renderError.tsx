import { Button } from "@components/ui/Button";
import { UseInfiniteQueryResult } from "@tanstack/react-query";

export function renderError(
  error: Error,
  refetch: UseInfiniteQueryResult["refetch"]
) {
  return (
    <>
      Error: {error.message}
      <Button variant="primary" onClick={() => refetch()}>
        Try Again
      </Button>
    </>
  );
}
