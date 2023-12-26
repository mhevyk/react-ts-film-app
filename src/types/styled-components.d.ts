import { theme } from "src/theme/theme";
import "styled-components";

type CustomTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
