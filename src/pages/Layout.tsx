import { DefaultTheme } from "@/themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>
    </>
  );
}