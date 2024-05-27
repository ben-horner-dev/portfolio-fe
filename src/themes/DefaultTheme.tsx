import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    portfolio: Palette["primary"];
  }

  interface PaletteOptions {
    portfolio?: PaletteOptions["primary"];
  }
}

export const DefaultTheme = createTheme({
  typography: {
    fontFamily: [
      "Jet Brains Mono",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ].join(","),
  },
  palette: {
    portfolio: {
      main: "#FFF",
      contrastText: "#EA4336",
    },
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#F6F7F9",
    },
    error: {
      main: "#D7110A",
      dark: "#FFCCC3",
    },
    warning: {
      main: "#ffa726",
      dark: "#FFDAB8",
    },
  },
});
