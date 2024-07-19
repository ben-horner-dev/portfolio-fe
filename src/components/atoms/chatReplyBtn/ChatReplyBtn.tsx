import { Button, InputAdornment } from "@mui/material";

import styles from "./ChatReplyBtn.module.css";

interface ChatReplyBtnProps {
  handleMsgSend: (profile: string) => void;
  activeMessages: { [key: string]: { sender: string; msg: string }[] };
}
export const ChatReplyBtn = ({
  handleMsgSend,
  activeMessages,
}: ChatReplyBtnProps) => {
  return (
    <InputAdornment position="end" className={styles["reply-btn"]}>
      <Button
        className={styles.btn}
        onClick={() => handleMsgSend(Object.keys(activeMessages)[0])}
        variant="outlined"
      >
        Send
      </Button>
    </InputAdornment>
  );
};
