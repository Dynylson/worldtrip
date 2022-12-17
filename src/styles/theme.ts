import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "Poppins",
      },
    },
  },
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
  fonts: {
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
});
