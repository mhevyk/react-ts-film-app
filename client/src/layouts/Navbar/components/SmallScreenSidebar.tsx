import { Logo } from "@components/ui/Logo";
import styled, { css } from "styled-components";
import closeIcon from "@icons/close.svg";
import { Modal } from "@components/ui/Modal";
import { Menu } from "@components/ui/Menu";
import { sidebarMenuItems } from "../../Sidebar/data/sidebarMenuItems";
import { IconButton } from "@components/ui/IconButton";

const ModalTopToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid
    ${(props) => props.theme.colors.whiteWithOpacity(0.2)};
`;

const CloseIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
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

const additionalMenuStyles = css`
  margin: auto;
  gap: 35px;
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
        <CloseIcon src={closeIcon} alt="Close icon" onClick={handleClose} />
      </ModalTopToolbar>
      <Menu
        items={sidebarMenuItems}
        renderItem={(item) => (
          <MenuItem>
            <IconButton icon={item.icon} size={19.2} />
            <MenuItemLabel>{item.label}</MenuItemLabel>
          </MenuItem>
        )}
        direction="column"
        wrapperStyles={additionalMenuStyles}
      />
    </Modal>
  );
}
