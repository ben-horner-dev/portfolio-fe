import { Conversation } from "@/components/molecules/conversation";
import { useAppDispatch } from "@/hooks";
import { setMessage } from "@/slices/socialNetworkSlice";
import { Fade, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import styles from "./Conversations.module.css";

interface ConversationsProps {
  setActiveMessages: (value: any) => void;
  activeMessages: { [key: string]: { sender: string; msg: string }[] };
  fade: boolean;
}

export const Conversations = ({
  setActiveMessages,
  activeMessages,
  fade,
}: ConversationsProps) => {
  const [newMsg, setNewMsg] = useState("");
  const dispatch = useAppDispatch();
  const handleMsgSend = (profile: string) => {
    if (newMsg === "") return;
    const newMsgsObj = {
      ...activeMessages,
      [profile]: [...activeMessages[profile], { sender: "me", msg: newMsg }],
    };
    setActiveMessages(newMsgsObj);

    dispatch(setMessage({ user: profile, msg: { sender: "me", msg: newMsg } }));
    setNewMsg("");
  };

  return (
    <>
      {Object.keys(activeMessages).length > 0 ? (
        <Fade in={fade} timeout={500}>
          <Box className={styles["conversation-box-inner"]}>
            <Grid container className={styles["conversation-grid-inner"]}>
              <Conversation
                activeMessages={activeMessages}
                handleMsgSend={handleMsgSend}
                newMsg={newMsg}
                setNewMsg={setNewMsg}
              />
            </Grid>
          </Box>
        </Fade>
      ) : null}
    </>
  );
};
