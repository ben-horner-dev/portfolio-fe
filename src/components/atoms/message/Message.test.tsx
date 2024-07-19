import { renderWithProviders } from "@/utils/testUtils";
import { Message } from "./Message";

describe("Message", () => {
  it("Check handle change activity message", async () => {
    const setActiveMessages = jest.fn();
    const setFade = jest.fn();
    const message = {
      name: "name",
      message: [{ sender: "test", msg: "message" }],
      active: 1,
    };
    const { container } = renderWithProviders(
      <Message {...{ setActiveMessages, setFade, message }} />,
    );
    const element = container.querySelector(".list-item");
    element?.click();
    expect(setFade).toBeCalledTimes(1);
    expect(setActiveMessages).toBeCalledTimes(1);
  });
});
