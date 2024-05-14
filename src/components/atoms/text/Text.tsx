import { Typography } from "@mui/material";
import style from "./Text.module.css";

export function Text({ text, className }: { text: string; className: string }) {
  return <Typography className={style[className]}>{text}</Typography>;
}
