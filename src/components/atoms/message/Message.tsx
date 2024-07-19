import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import styles from "./Message.module.css";

interface MessageType {
  msg: string;
  sender: string;
}

interface MessagesMetaType {
  name: string;
  message: MessageType[];
  active: number;
}

interface MessageProps {
  message: MessagesMetaType;
  setActiveMessages: (activeMessages: { [key: string]: MessageType[] }) => void;
  setFade: (fade: boolean) => void;
}
export function Message({ message, setActiveMessages, setFade }: MessageProps) {
  const handleChangeActiveMsg = () => {
    setFade(false);
    setTimeout(
      () => setActiveMessages({ [message.name]: message.message }),
      500,
    );
  };

  return (
    <>
      <ListItem
        alignItems="flex-start"
        className={styles["list-item"]}
        onClick={handleChangeActiveMsg}
      >
        <ListItemAvatar>
          <Avatar
            alt={message.name}
            src={`/socialNetwork/${message.name}.jpg`}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              className={` ${styles["activity-txt"]}`}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {message.name}
            </Typography>
          }
          secondary={
            <span className={styles["activity-txt"]}>
              Last Activity: {message.active} hours ago
            </span>
          }
        />
      </ListItem>
      <Divider
        className={styles["activity-txt"]}
        variant="inset"
        component="li"
      />
    </>
  );
}
