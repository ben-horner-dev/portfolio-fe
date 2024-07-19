import { useRefs } from "@/contexts/refProvider";
import { useAppDispatch } from "@/hooks";
import { setShowFriends, setShowMessages } from "@/slices/socialNetworkSlice";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { Fade, IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";

export const SocialBtns = () => {
  const res = useRefs();
  const dispatch = useAppDispatch();
  const isSocialNetworkVisible = res?.network.isVisible;

  const handleShowFriends = () => {
    dispatch(setShowFriends(true));
  };

  const handleShowMessages = () => {
    dispatch(setShowMessages(true));
  };

  return (
    <Stack direction={"row"}>
      <Fade in={isSocialNetworkVisible}>
        <IconButton onClick={handleShowMessages}>
          <MailOutlineOutlinedIcon />
        </IconButton>
      </Fade>
      <Fade in={isSocialNetworkVisible}>
        <IconButton onClick={handleShowFriends}>
          <PeopleAltOutlinedIcon />
        </IconButton>
      </Fade>
    </Stack>
  );
};
