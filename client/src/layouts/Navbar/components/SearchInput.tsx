import { Button } from "@components/ui/Button";
import { TextInput } from "@components/ui/TextInput";
import { Icon } from "@iconify/react";
import { FormEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const InputGroup = styled.form`
  display: flex;
  position: relative;
`;

const SearchInputStyled = styled(TextInput)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;
  width: 100%;
  padding-right: 46px;

  &:placeholder-shown ~ .clear-button {
    display: none;
  }

  &:focus-within,
  &:focus-within ~ .search-button-wrapper {
    border-color: ${(props) => props.theme.colors.lightWithOpacity(0.8)};
  }
`;

const ClearButton = styled(Button)`
  position: absolute;

  right: 50px;
  top: 50%;
  transform: translateY(-50%);

  &:focus-within svg {
    color: ${(props) => props.theme.colors.lightWithOpacity(0.6)};
  }
`;

const ClearIcon = styled(Icon)`
  color: ${(props) => props.theme.colors.lightWithOpacity(0.3)};
  transition: all 400ms;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.whiteWithOpacity(0.6)};
  }
`;

const SearchButtonContainer = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundWithOpacity(0.5)};
  border-radius: 0 15px 15px 0;
  border: 1px solid ${(props) => props.theme.colors.lightWithOpacity(0.2)};
  border-left: none;
  display: flex;
  padding: 0 5px;
`;

const SearchButton = styled(Button)`
  margin: 6px;
  display: flex;
  align-items: center;

  &:hover svg,
  &:focus svg {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const SearchIcon = styled(Icon)`
  transition: color 200ms;
  color: ${(props) => props.theme.colors.white};
`;

export function SearchInput() {
  const [searchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get("q") ?? "");
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    navigate({
      pathname: "search",
      search: `?q=${searchValue}`,
    });
  }

  return (
    <InputGroup onSubmit={handleSubmit}>
      <SearchInputStyled
        type="search"
        placeholder="Search any film..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        autoFocus
      />
      <ClearButton
        className="clear-button"
        aria-label="Clear search value"
        type="button"
      >
        <ClearIcon
          icon="la:times-circle-solid"
          fontSize={20}
          onClick={() => setSearchValue("")}
        />
      </ClearButton>
      <SearchButtonContainer className="search-button-wrapper">
        <SearchButton aria-label="Search" type="submit">
          <SearchIcon icon="material-symbols:search" width={20} />
        </SearchButton>
      </SearchButtonContainer>
    </InputGroup>
  );
}
