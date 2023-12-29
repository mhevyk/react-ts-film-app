import { Link } from "react-router-dom";
import logoImage from "@icons/logo.svg";

export function Logo() {
  return (
    <Link to="/">
      <img src={logoImage} alt="Logo" loading="lazy" />
    </Link>
  );
}
