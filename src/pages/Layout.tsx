import { CustomAppBar } from "@/components/templates/appBar";
import { RefProvider } from "@/contexts/refProvider";
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
      <RefProvider>
        <CustomAppBar />
        <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>
      </RefProvider>
    </>
  );
}
