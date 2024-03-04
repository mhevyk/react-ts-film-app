import LogoIcon from "@icons/logo.svg?react";
import { SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function Logo({ size = 50, ...rest }: LogoProps) {
  return (
    <LogoIcon
      width={size}
      height={size}
      style={{ cursor: "pointer" }}
      {...rest}
    />
  );
}
