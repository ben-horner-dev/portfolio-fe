import { Message } from "@/components/atoms/message";
import { useAppSelector } from "@/hooks";
import List from "@mui/material/List";
import styles from "./Messages.module.css";

interface MessagesProps {
  setFade: (value: boolean) => void;
  setActiveMessages: (value: any) => void;
}
export function Messages({ setFade, setActiveMessages }: MessagesProps) {
  const userData = useAppSelector((state) => state.socialNetwork.userData);

  const messages = userData.map((user) => ({
    name: user.name,
    message: user.messages,
    active: user.active,
  }));

  return (
    <List className={styles["message-list-inner"]}>
      {Object.values(messages).map((message, index) => {
        return (
          <Message
            key={"msg" + index}
            message={message}
            setActiveMessages={setActiveMessages}
            setFade={setFade}
          />
        );
      })}
    </List>
  );
}
