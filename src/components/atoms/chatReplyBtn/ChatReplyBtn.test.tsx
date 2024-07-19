import { renderWithProviders } from "@/utils/testUtils";
import { ChatReplyBtn } from "./ChatReplyBtn";

describe("Chat Reply Btn", () => {
  it("Check active Btn is updated", () => {
    const handleMsgSend = jest.fn();
    const activeMessages = {
      "1": [
        {
          sender: "1",
          msg: "Hello",
        },
      ],
    };
    const { getByText } = renderWithProviders(
      <ChatReplyBtn
        handleMsgSend={handleMsgSend}
        activeMessages={activeMessages}
      />,
    );
    const btn = getByText("Send");
    btn.click();
    expect(handleMsgSend).toHaveBeenCalledWith("1");
  });
});
