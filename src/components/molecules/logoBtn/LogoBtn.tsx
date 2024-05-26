import { Logo } from "@/components/atoms/logo";
import { IconButton } from "@mui/material";

export const LogoBtn = () => {
  return (
    <IconButton disableRipple>
      <Logo />
    </IconButton>
  );
};
