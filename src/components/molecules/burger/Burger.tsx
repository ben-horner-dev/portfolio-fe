import { useRefs } from "@/contexts/refProvider";
import { useAppDispatch } from "@/hooks";
import { setNavOpen } from "@/slices/navSlice";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, useTheme } from "@mui/material";
import styles from "./Burger.module.css";

export const Burger = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const isHeroVisible = useRefs()?.hero.isVisible;
  const toggleDrawer = () => {
    dispatch(setNavOpen());
  };
  return (
    <IconButton
      onClick={toggleDrawer}
      className={styles.burger}
      size="large"
      edge="start"
      data-testid="burger-button"
    >
      <MenuIcon
        sx={{
          color: isHeroVisible ? "white" : theme.palette.secondary.main,
        }}
      />
    </IconButton>
  );
};
