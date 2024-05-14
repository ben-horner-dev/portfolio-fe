import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useElementOnScreen } from "./useElementOnScreen";

const TestComponent = () => {
  const { ref, isVisible } = useElementOnScreen();
  return (
    <div ref={ref} data-testid="hook-element">
      {isVisible ? "Visible" : "Not Visible"}
    </div>
  );
};

describe("useElementOnScreen", () => {
  it("returns an object with ref and isVisible properties", () => {
    render(<TestComponent />);
    const div = screen.getByTestId("hook-element");

    expect(div).toBeInTheDocument();

    expect(["Not Visible"]).toContain(div.textContent);
  });
});
