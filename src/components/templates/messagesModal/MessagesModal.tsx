import { MessageTitle } from "@/components/molecules/messageTitle";
import { Modal } from "@/components/molecules/modal";
import { Conversations } from "@/components/organisms/conversations";
import { Messages } from "@/components/organisms/messages";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setShowMessages } from "@/slices/socialNetworkSlice";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import styles from "./MessagesModal.module.css";

interface activeMessages {
  [key: string]: { sender: string; msg: string }[];
}

export function MessagesModal() {
  const dispatch = useAppDispatch();
  const showMessages = useAppSelector(
    (state) => state.socialNetwork.showMessages,
  );

  const [fade, setFade] = useState(true);

  const [activeMessages, setActiveMessages] = useState<activeMessages>({});

  useEffect(() => {
    setFade(true);
  }, [activeMessages]);

  const handleClose = () => {
    dispatch(setShowMessages(false));
  };

  return (
    <Modal open={showMessages} handleClose={handleClose}>
      <>
        <MessageTitle />
        <Box className={styles["message-content"]}>
          <Grid container spacing={2}>
            <Grid item xs={4} md={6}></Grid>
            <Grid className={styles["messages-list"]} item xs={3} md={6}>
              <Messages
                setFade={setFade}
                setActiveMessages={setActiveMessages}
              />
            </Grid>
            <Grid item xs={8} md={6} className={styles["conversation-box"]}>
              <Conversations
                fade={fade}
                activeMessages={activeMessages}
                setActiveMessages={setActiveMessages}
              />
            </Grid>
          </Grid>
        </Box>
      </>
    </Modal>
  );
}
