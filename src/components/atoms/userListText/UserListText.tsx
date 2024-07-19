import { Typography } from "@mui/material";
import styles from "./UserListText.module.css";

export const UserListText = ({ user }: { user: string }) => {
  return (
    <Typography
      className={styles["user-result-username"]}
      component="span"
      variant="body2"
      color="text.primary"
    >
      {user}
    </Typography>
  );
};
