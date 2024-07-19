import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "./MessageTitle.module.css";

export const MessageTitle = () => {
  return (
    <Box className={styles["messages-title"]}>
      <Typography
        className={styles["messages-title"]}
        variant="h5"
        component="div"
      >
        Messages
      </Typography>
    </Box>
  );
};
