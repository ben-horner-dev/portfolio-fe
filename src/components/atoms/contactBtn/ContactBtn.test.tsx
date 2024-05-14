import { useRefs } from "@/contexts/refProvider";
import { fireEvent, render } from "@testing-library/react";
import { ContactBtn } from "./ContactBtn";

// Mock the scrollIntoView method
window.HTMLElement.prototype.scrollIntoView = function () {};
jest.mock("@/contexts/refProvider", () => ({
  useRefs: jest.fn(),
}));

describe("ContactBtn", () => {
  it("renders correctly", () => {
    const { getByText } = render(<ContactBtn />);
    expect(getByText("Contact")).toBeInTheDocument();
  });

  it("calls scrollIntoView on button click", () => {
    const scrollIntoViewMock = jest.fn();

    // Mock the useRefs hook to return a mock ref object
    useRefs.mockImplementation(() => ({
      contact: {
        ref: {
          current: {
            scrollIntoView: scrollIntoViewMock,
          },
        },
      },
    }));

    const { getByText } = render(<ContactBtn />);
    const btn = getByText("Contact");

    fireEvent.click(btn);
    expect(scrollIntoViewMock).toHaveBeenCalled();
  });
});
