import { useAppSelector } from "@/hooks";
import { Button } from "@mui/material";
import styles from "./UserPostsBtn.module.css";

export const UserPostsBtn = ({
  handleFollow,
  user,
}: {
  handleFollow: () => void;
  user: string;
}) => {
  const userData = useAppSelector((state) => state.socialNetwork.userData);
  return (
    <Button
      onClick={handleFollow}
      variant="contained"
      className={styles["follow-btn"]}
    >
      {userData.filter((newUser) => newUser.name === user)[0].followed
        ? "Unfollow"
        : "Follow"}
    </Button>
  );
};
