import ChevronRightIconSvg from "@icons/chevron-right.svg?react";
import { SVGProps } from "react";

type ChevronRightIconProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

export function ChevronRightIcon({ size, ...rest }: ChevronRightIconProps) {
  return (
    <ChevronRightIconSvg width={size} height={size} color="white" {...rest} />
  );
}
