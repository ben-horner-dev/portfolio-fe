import { Logo } from "@/components/atoms/logo";
import { useRefs } from "@/contexts/refProvider";
import { IconButton } from "@mui/material";

export const LogoBtn = () => {
  const refs = useRefs();

  const handleClick = () => {
    refs?.hero.ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <IconButton disableRipple onClick={handleClick}>
      <Logo />
    </IconButton>
  );
};
