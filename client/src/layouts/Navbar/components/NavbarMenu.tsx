import { NavLink } from "@components/styled/NavLink";
import { Logo } from "@components/ui/Logo";
import { Menu } from "@components/ui/Menu";
import { mainMenuItems } from "@data/mainMenuItems";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

type NavbarMenuProps = {
  shouldRenderLogo: boolean;
};

export function NavbarMenu({ shouldRenderLogo }: NavbarMenuProps) {
  const navigate = useNavigate();

  // FIXME: can render two logos on Ipad Pro
  return (
    <Group>
      {shouldRenderLogo && <Logo size={45} onClick={() => navigate("/")} />}
      <Menu
        items={mainMenuItems}
        renderItem={(item) => <NavLink to={item.path}>{item.label}</NavLink>}
        getKey={(item) => item.label}
        listStyle={{ gap: 40 }}
      />
    </Group>
  );
}
