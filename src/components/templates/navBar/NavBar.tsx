import { CustomToolbar } from "@/components/organisms/customToolbar";
import { AppBar } from "@mui/material";
import { Box } from "@mui/system";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <Box>
      <AppBar position="fixed" className={styles.appbar}>
        <CustomToolbar />
      </AppBar>
    </Box>
  );
};
