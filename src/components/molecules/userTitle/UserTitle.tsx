import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "./UserTitle.module.css";

export const UserTitle = () => {
  return (
    <Box className={styles["title-container"]}>
      <Typography variant="h5" gutterBottom component="div">
        Users
      </Typography>
    </Box>
  );
};
