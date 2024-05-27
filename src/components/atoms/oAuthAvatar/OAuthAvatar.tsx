import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Image from "next/image";
import styles from "./OAuthAvatar.module.css";

interface OAuthAvatarProps {
  icon: string;
}

export const OAuthAvatar = ({ icon }: OAuthAvatarProps) => {
  return (
    <ListItemAvatar>
      <Avatar className={styles["oauth-box-avatar"]}>
        <Image src={`${icon}.svg`} alt={icon} width={50} height={50} />
      </Avatar>
    </ListItemAvatar>
  );
};
