import { PageContentWrapper } from "@components/styled/PageContentWrapper";
import { Button } from "@components/ui/Button";
import { useNavigate, useSearchParams } from "react-router-dom";

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchValue = searchParams.get("query") ?? "";

  return (
    <PageContentWrapper>
      <p>Searched value: {searchValue}</p>
      <Button variant="primary" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </PageContentWrapper>
  );
}
