import { Link } from "react-router-dom";
import logoImage from "@icons/logo.svg";
import { ComponentProps } from "react";

type LogoProps = Omit<ComponentProps<typeof Link>, "to">;

export function Logo(props: LogoProps) {
  return (
    <Link to="/" {...props}>
      <img src={logoImage} alt="Logo" loading="lazy" />
    </Link>
  );
}
