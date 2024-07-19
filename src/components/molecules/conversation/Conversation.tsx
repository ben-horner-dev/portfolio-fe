import { Grid } from "@mui/material";
import { useRef } from "react";
import { ChatMessageList } from "../chatMessageList";
import { ChatReplyField } from "../chatReplyField";
import styles from "./Conversation.module.css";

interface ConversationProps {
  activeMessages: { [key: string]: { sender: string; msg: string }[] };
  handleMsgSend: (profile: string) => void;
  newMsg: string;
  setNewMsg: (newMsg: string) => void;
}

export function Conversation({
  activeMessages,
  handleMsgSend,
  newMsg,
  setNewMsg,
}: ConversationProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className={styles.conversation}>
        <div ref={ref}>
          <ChatMessageList activeMessages={activeMessages} />
        </div>
      </div>
      <Grid
        container
        item
        alignItems="end"
        xs={12}
        className={styles["reply-box"]}
      >
        <ChatReplyField
          {...{
            setNewMsg,
            activeMessages,
            handleMsgSend,
            newMsg,
            msgRef: ref,
          }}
        />
      </Grid>
    </>
  );
}
