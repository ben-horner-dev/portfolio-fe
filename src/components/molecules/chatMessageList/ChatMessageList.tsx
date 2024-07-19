import { ChatMessage } from "@/components/molecules/chatMessage";
import { Grid } from "@mui/material";

interface ChatMessageListProps {
  activeMessages: { [key: string]: { sender: string; msg: string }[] };
}

export const ChatMessageList = ({ activeMessages }: ChatMessageListProps) => {
  return (
    <>
      {activeMessages[Object.keys(activeMessages)[0]].map((msg, index) => {
        const justify = msg.sender === "me" ? "right" : "left";
        const align = msg.sender === "me" ? "flex-end" : "flex-start";
        return (
          <Grid
            container
            spacing={0}
            item
            xs={12}
            key={`msg${index}`}
            justifyContent={justify}
            sx={{
              alignContent: align,
            }}
          >
            <ChatMessage msg={msg} />
          </Grid>
        );
      })}
    </>
  );
};
