import { UserPostsBtn } from "@/components/atoms/userPostsBtn";
import { UserPostsTitle } from "@/components/atoms/userPostsTitle";
import { UserListItem } from "@/components/molecules/UserLIstItem";
import { UserPosts } from "@/components/molecules/userPosts";
import { useAppDispatch } from "@/hooks";
import { setFollowUser } from "@/slices/socialNetworkSlice";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import styles from "./UserSearchResult.module.css";

interface UserSearchResultProps {
  user: string;
}

export function UserSearchResult({ user }: UserSearchResultProps) {
  const dispatch = useAppDispatch();

  const handleFollow = () => {
    dispatch(setFollowUser(user));
  };

  return (
    <Box className={styles["user-result-inner-box"]}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <UserListItem user={user} />
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={6}
          alignItems="center"
          justifyContent="end"
        >
          <UserPostsBtn handleFollow={handleFollow} user={user} />
        </Grid>
        <Grid item xs={12}>
          <UserPostsTitle />
        </Grid>
        <Grid item xs={12}>
          <UserPosts user={user} />
        </Grid>
      </Grid>
    </Box>
  );
}
