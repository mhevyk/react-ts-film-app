const theme = {
  breakpoints: {
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  colors: {
    primary: "#E10856",
    secondary: "#BA104D",
    accent: "#0FEFFD",
    backgroundRGB: "29, 29, 29",
  },
  globals: {
    contentContainerSpacing: "55px",
    contentContainerMaxWidth: "1700px",
    sliderSpacing: "24px",
  },
} as const;

export default theme;

export type Theme = typeof theme;
