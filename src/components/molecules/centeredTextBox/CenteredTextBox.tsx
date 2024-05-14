import Box from "@mui/material/Box";
import { ReactNode } from "react";
import style from "./CenteredTextBox.module.css";

export default function CenteredTextBox({ children }: { children: ReactNode }) {
  return <Box className={style["centered-text"]}>{children}</Box>;
}
