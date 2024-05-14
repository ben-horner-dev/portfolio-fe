import { FlashType } from "@/enums/flashEnums";
import { useFlash } from "@/hooks";
import { setupStore } from "@/lib";
import { renderWithProviders } from "@/utils/testUtils";
import "@testing-library/jest-dom";
import { act } from "@testing-library/react";
jest.useFakeTimers();

const TestComponent = () => {
  const flash = useFlash();
  flash("Test message", FlashType.ERROR);
  return null;
};

describe("useFlash", () => {
  it("dispatches setAlert and closeAlert actions", () => {
    const store = setupStore();
    renderWithProviders(<TestComponent />, { store });
    expect(store.getState().alert.open).toBe(true);
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(store.getState().alert.open).toBe(false);
  });
});
