import { Logo } from "@components/ui/Logo";
import styled from "styled-components";
import CloseIcon from "@icons/close.svg?react";
import { Modal } from "@components/ui/Modal";
import { mainMenuItems } from "../../../data/mainMenuItems";
import { IconButton } from "@components/ui/IconButton";
import { Menu } from "@components/ui/Menu";

const ModalTopToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid
    ${(props) => props.theme.colors.whiteWithOpacity(0.2)};
`;

const MenuItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 20px;
`;

const MenuItemLabel = styled.span`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
`;

type SmallScreenSidebarProps = {
  isOpen: boolean;
  handleClose: () => void;
};

export function SmallScreenSidebar({
  isOpen,
  handleClose,
}: SmallScreenSidebarProps) {
  return (
    <Modal isOpen={isOpen} onClose={handleClose} fullscreen locked>
      <ModalTopToolbar>
        <Logo />
        <CloseIcon
          color="white"
          width={40}
          height={40}
          style={{ cursor: "pointer" }}
          onClick={handleClose}
        />
      </ModalTopToolbar>
      <Menu
        items={mainMenuItems}
        renderItem={(item) => (
          <MenuItem>
            <IconButton icon={item.icon} size={19.2} />
            <MenuItemLabel>{item.label}</MenuItemLabel>
          </MenuItem>
        )}
        getKey={(item) => item.label}
        listStyle={{ direction: "column", gap: 35 }}
      />
    </Modal>
  );
}
