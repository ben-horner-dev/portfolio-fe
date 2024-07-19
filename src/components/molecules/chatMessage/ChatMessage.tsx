import { Fade, Typography } from "@mui/material";
import styles from "./ChatMessage.module.css";

interface ChatMessagesProps {
  msg: { sender: string; msg: string };
}

export const ChatMessage = ({ msg }: ChatMessagesProps) => {
  return (
    <Fade in={true} timeout={700}>
      <Typography
        variant="body1"
        gutterBottom
        component="div"
        className={styles["individual-message-text"]}
        sx={{
          color: msg.sender === "me" ? "white" : "black",
          backgroundColor:
            msg.sender === "me"
              ? "#087AD9"
              : msg.sender === "placeholder"
                ? "transparent"
                : "pink",
        }}
      >
        {msg.msg}
      </Typography>
    </Fade>
  );
};
