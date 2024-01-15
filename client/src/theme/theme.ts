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
    white: "white",
    whiteWithOpacity: (opacity: number) => `rgba(255, 255, 255, ${opacity})`,
    background: "rgb(29, 29, 29)",
    backgroundWithOpacity: (opacity: number) => `rgba(29, 29, 29, ${opacity})`,
    light: "rgb(226, 219, 219)",
    lightWithOpacity: (opacity: number) => `rgba(226, 219, 219, ${opacity})`,
  },
  globals: {
    contentContainerSpacing: "55px",
    contentContainerMaxWidth: "1700px",
    sliderSpacing: "24px",
  },
} as const;

export default theme;

export type Theme = typeof theme;
