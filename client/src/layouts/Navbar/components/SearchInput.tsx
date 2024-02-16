import { TextInput } from "@components/ui/TextInput";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const InputGroup = styled.div`
  display: flex;
`;

const SearchInputStyled = styled(TextInput)`
  width: 100%;
`;

const SearchIconButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  height: 100%;
  border-radius: 0 26px 26px 0;
  padding: 0 10px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SearchIcon = styled(Icon)``;

// TODO: improve UI
export function SearchInput() {
  return (
    <InputGroup>
      <SearchInputStyled type="search" placeholder="Search any film..." />
      <SearchIconButton>
        <SearchIcon icon="material-symbols:search" width={20} />
      </SearchIconButton>
    </InputGroup>
  );
}
