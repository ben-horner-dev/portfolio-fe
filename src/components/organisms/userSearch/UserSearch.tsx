import { UserSearchResult } from "@/components/molecules/searchResult";
import { UserSearchTextField } from "@/components/molecules/userSearchTextField";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setUser } from "@/slices/socialNetworkSlice";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/system";
import styles from "./UserSearch.module.css";

export const UserSearch = () => {
  const userData = useAppSelector((state) => state.socialNetwork.userData);
  const dispatch = useAppDispatch();
  const users = userData.map((user) => user.name);
  const user = useAppSelector((state) => state.socialNetwork.user);
  return (
    <Box className={styles["user-result-box"]}>
      <Autocomplete
        value={user}
        onChange={(_, newValue: string | null) => {
          if (!newValue) return;
          dispatch(setUser(newValue));
        }}
        isOptionEqualToValue={(option, value) =>
          option === value || value === ""
        }
        className={styles["search-bar"]}
        options={users}
        autoHighlight
        getOptionLabel={(user) => user}
        renderOption={(props, user) => {
          return <UserSearchResult props={props} user={user} />;
        }}
        renderInput={(params) => <UserSearchTextField params={params} />}
      />
    </Box>
  );
};
