type ColorWithOpacity = (opacity: number) => string;

type ThemeConstraints = {
  breakpoints: Record<string, number>;
  colors: Record<string, string | ColorWithOpacity>;
  globals: Record<string, number>;
};

const theme = {
  breakpoints: {
    xs: 480,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  colors: {
    primary: "#E10856",
    secondary: "#BA104D",
    accent: "#0FEFFD",
    white: "white",
    whiteWithOpacity: (opacity: number) => `rgba(255, 255, 255, ${opacity})`,
    dark: "#140f0f",
    background: "rgb(29, 29, 29)",
    backgroundWithOpacity: (opacity: number) => `rgba(29, 29, 29, ${opacity})`,
    light: "rgb(226, 219, 219)",
    lightWithOpacity: (opacity: number) => `rgba(226, 219, 219, ${opacity})`,
  },
  globals: {
    contentContainerSpacing: 55,
    contentContainerMaxWidth: 1700,
    sliderSpacing: 24,
  },
} as const satisfies ThemeConstraints;

export default theme;

export type Theme = typeof theme;
