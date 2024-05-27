import { useRefs } from "@/contexts/refProvider";
import { stringToAvatar } from "@/utils/stringToAvatar";
import { Fade, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { signOut, useSession } from "next-auth/react";

export const UserAvatar = () => {
  const refs = useRefs();
  const isHeroVisible = refs?.hero.isVisible;
  const { data: session } = useSession();
  return (
    <>
      {session && session.user && (
        <Fade in={!isHeroVisible}>
          <IconButton onClick={() => signOut()}>
            <Avatar {...stringToAvatar(session.user?.name as string)} />
          </IconButton>
        </Fade>
      )}
    </>
  );
};
