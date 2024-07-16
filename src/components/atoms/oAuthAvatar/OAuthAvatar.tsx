import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import styles from "./OAuthAvatar.module.css";

interface OAuthAvatarProps {
  icon: string;
}

export const OAuthAvatar = ({ icon }: OAuthAvatarProps) => {
  const { data: session } = useSession();

  const handleClick = (provider: string) => {
    if (session) {
      signOut();
    } else {
      signIn(provider);
    }
  };

  return (
    <ListItemAvatar
      data-testid="oauth-avatar"
      onClick={() => handleClick(icon)}
    >
      <Avatar className={styles["oauth-box-avatar"]}>
        <Image src={`oAuth/${icon}.svg`} alt={icon} width={50} height={50} />
      </Avatar>
    </ListItemAvatar>
  );
};
