import { useRefs } from "@/contexts/refProvider";
import { fireEvent, render } from "@testing-library/react";
import { BtnGroup } from "./BtnGroup";

jest.mock("@/contexts/refProvider");

describe("BtnGroup", () => {
  it("renders button group with children and button items", () => {
    useRefs.mockReturnValue({
      hero: {
        isVisible: false,
      },
    });

    const { getByTestId, getByText } = render(
      <BtnGroup>
        <div>Child</div>
      </BtnGroup>,
    );

    const buttonGroup = getByTestId("menu-btns");
    expect(buttonGroup).toBeInTheDocument();

    const child = getByText("Child");
    expect(child).toBeInTheDocument();

    const button = getByText("OAuth");
    expect(button).toBeInTheDocument();
  });

  it("calls handleClick on button click", () => {
    const mockScrollIntoView = jest.fn();
    useRefs.mockReturnValue({
      hero: {
        isVisible: false,
      },
      oauth: {
        ref: {
          current: {
            scrollIntoView: mockScrollIntoView,
          },
        },
      },
    });

    const { getByText } = render(
      <BtnGroup>
        <div>Child</div>
      </BtnGroup>,
    );

    const button = getByText("OAuth");
    fireEvent.click(button);

    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });
});
