import { CustomAppBar } from "@/components/templates/AppBar";
import { DefaultTheme } from "@/themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Created By Ben Horner",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline />
      <CustomAppBar />
      <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>
    </>
  );
}
