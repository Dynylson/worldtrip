import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    highlight: "#ffba08",
    dark: {
      black: "#000000",
      text: "#47585b",
      info: "#999999",
    },
    light: {
      white: "#ffffff",
      text: "#f5f8fa",
      info: "#dadada",
    },
  },
});
