import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import styles from "./Burger.module.css";

export const Burger = () => {
  return (
    <IconButton
      className={styles.burger}
      size="large"
      edge="start"
      data-testid="burger-button"
    >
      <MenuIcon />
    </IconButton>
  );
};
