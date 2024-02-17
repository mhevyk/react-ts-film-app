import { createGlobalStyle, css } from "styled-components";
import theme from "./theme";
import { getBrowserName } from "@utils/getBrowserName";

const currentBrowser = getBrowserName();

const scrollbarStyles = css`
  ::-webkit-scrollbar {
    width: 0.6em;
    height: 0.6em;
  }

  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-thumb {
    border-radius: 100px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.light};
  }

  // FIXME: Mozilla does not support scrollbar thumb rounded angles
  ${() =>
    (currentBrowser === "Mozilla Firefox" ||
      currentBrowser === "Microsoft Edge") &&
    css`
      * {
        scrollbar-width: thin;
        scrollbar-color: ${theme.colors.light} ${theme.colors.background};
      }
    `}
`;

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    background-color: ${theme.colors.background};
  }

  #root {
    max-width: ${(props) => props.theme.globals.contentContainerMaxWidth}px;
  }

  ${scrollbarStyles};
`;
