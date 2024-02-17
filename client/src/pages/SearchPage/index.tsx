import { Button } from "@components/ui/Button";
import { useNavigate, useSearchParams } from "react-router-dom";

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchValue = searchParams.get("query") ?? "";

  return (
    <>
      {/* TODO: complete logic and UI of search */}
      <p style={{ color: "white" }}>Searched value: {searchValue}</p>
      <Button variant="primary" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </>
  );
}
