import { useTheme } from "@emotion/react";
import { TextField } from "@mui/material";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useRef } from "react";

import styles from "./ChatReplyField.module.css";
import { ChatReplyBtn } from "@/components/atoms/chatReplyBtn";

interface ChatReplyFieldProps {
  setNewMsg: (newMsg: string) => void;
  activeMessages: { [key: string]: { sender: string; msg: string }[] };
  handleMsgSend: (profile: string) => void;
  newMsg: string;
  msgRef: React.RefObject<HTMLDivElement>;
}

export const ChatReplyField = ({
  setNewMsg,
  activeMessages,
  handleMsgSend,
  newMsg,
  msgRef,
}: ChatReplyFieldProps) => {
  const theme = useTheme() as Theme;
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const target = e.target as HTMLInputElement;
      setNewMsg(target.value);
      handleMsgSend(Object.keys(activeMessages)[0]);
    }
  };
  const responseRef = useRef<HTMLDivElement>(null);
  const customTheme = createTheme({
    ...theme,
    palette: {
      ...theme.palette,
      primary: {
        main: "#808080",
      },
    },
  });

  useEffect(() => {
    if (msgRef?.current) {
      responseRef.current?.scrollIntoView({ behavior: "auto" });
    }
  }, [activeMessages, msgRef]);

  return (
    <ThemeProvider theme={customTheme}>
      <TextField
        ref={responseRef}
        multiline
        fullWidth
        label="Type a message"
        variant="outlined"
        className={styles["reply-text-field"]}
        InputProps={{
          endAdornment: (
            <ChatReplyBtn
              handleMsgSend={handleMsgSend}
              activeMessages={activeMessages}
            />
          ),
        }}
        value={newMsg}
        onChange={(e) => {
          setNewMsg(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
    </ThemeProvider>
  );
};
