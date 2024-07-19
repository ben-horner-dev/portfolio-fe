import { useAppDispatch, useAppSelector, useLikeUser } from "@/hooks";
import { setShowFriends, setUser } from "@/slices/socialNetworkSlice";
import { ImageListItemImageInfoProps } from "@/types/EcommerceTypes";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Avatar, IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";
import styles from "./ImageListItemPost.module.css";

export const ImageListItemPost = ({
  handleProductHover,
  keyVal,
}: ImageListItemImageInfoProps) => {
  const dispatch = useAppDispatch();
  const liked = useAppSelector((state) => state.socialNetwork.liked);
  const { handleLike } = useLikeUser();

  return (
    <div
      className={styles["socials-img-info"]}
      onMouseEnter={handleProductHover(keyVal, true)}
      onMouseLeave={handleProductHover(keyVal, false)}
    >
      <Stack direction="row" spacing={2}>
        <IconButton
          onClick={() => {
            dispatch(setShowFriends(true));
            dispatch(setUser(`profile_${keyVal + 1}`));
          }}
        >
          <Avatar
            alt="profile_pic"
            src={`/socialNetwork/profile_${keyVal + 1}.jpg`}
          />
        </IconButton>
        <IconButton onClick={handleLike(keyVal)}>
          {!liked[keyVal] ? <FavoriteBorderIcon /> : <FavoriteIcon />}
        </IconButton>
      </Stack>
    </div>
  );
};
