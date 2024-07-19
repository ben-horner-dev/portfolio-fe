import { Modal } from "@/components/molecules/modal";
import { UserTitle } from "@/components/molecules/userTitle";
import { UserSearch } from "@/components/organisms/userSearch";
import { UserSearchResult } from "@/components/organisms/userSearchResult";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setShowFriends } from "@/slices/socialNetworkSlice";
import styles from "./UsersModal.module.css";

export function UsersModal() {
  const dispatch = useAppDispatch();
  const showFriends = useAppSelector(
    (state) => state.socialNetwork.showFriends,
  );
  const user = useAppSelector((state) => state.socialNetwork.user);
  const handleClose = () => {
    dispatch(setShowFriends(false));
  };

  return (
    <Modal open={showFriends} handleClose={handleClose}>
      <div className={styles["user-container"]}>
        <UserTitle />
        <UserSearch />
        {user && <UserSearchResult user={user} />}
      </div>
    </Modal>
  );
}
