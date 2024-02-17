import { Button } from "@components/ui/Button";
import { TextInput } from "@components/ui/TextInput";
import { Icon } from "@iconify/react";
import { media } from "@theme/mediaQueries";
import { useState } from "react";
import styled from "styled-components";

const InputGroup = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  @media ${media.screens.sm} {
    width: auto;
    margin-left: auto;
  }
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
`;

const ClearIcon = styled(Icon)`
  color: ${(props) => props.theme.colors.lightWithOpacity(0.3)};
  transition: all 400ms;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.lightWithOpacity(0.6)};
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
  const [searchValue, setSearchValue] = useState("");

  return (
    <InputGroup>
      <SearchInputStyled
        type="search"
        placeholder="Search any film..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        autoFocus
      />
      <ClearButton className="clear-button" aria-label="Clear search value">
        <ClearIcon
          icon="la:times-circle-solid"
          fontSize={20}
          onClick={() => setSearchValue("")}
        />
      </ClearButton>
      <SearchButtonContainer className="search-button-wrapper">
        <SearchButton aria-label="Search">
          <SearchIcon icon="material-symbols:search" width={20} />
        </SearchButton>
      </SearchButtonContainer>
    </InputGroup>
  );
}
