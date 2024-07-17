import { render } from "@testing-library/react";
import * as NextAuth from "next-auth/react";
import { OAuthAvatar } from "./OAuthAvatar";

// Mock the entire next-auth/react module
jest.mock("next-auth/react");

describe("OAuthAvatar", () => {
  beforeEach(() => {
    // Reset mocks and provide default mock implementations before each test
    NextAuth.useSession.mockReturnValue({
      data: { user: { email: "test@example.com" } },
    });
    NextAuth.signIn.mockClear();
    NextAuth.signOut.mockClear();
  });
  it("renders without crashing and displays correct icon", () => {
    const { getByAltText } = render(<OAuthAvatar icon="test-icon" />);

    const imageElement = getByAltText("test-icon");
    expect(imageElement).toHaveAttribute("src", "oAuth/test-icon.svg");
    expect(imageElement).toHaveAttribute("width", "50");
    expect(imageElement).toHaveAttribute("height", "50");
  });

  it("calls signOut when user is signed in", () => {
    const { getByTestId } = render(<OAuthAvatar icon="test-icon" />);
    getByTestId("oauth-avatar").click();
    expect(NextAuth.signOut).toHaveBeenCalled();
  });

  it("calls signIn when user is not signed in", () => {
    // Override the useSession mock for this test only
    NextAuth.useSession.mockReturnValue({ data: null });

    const { getByTestId } = render(<OAuthAvatar icon="test-icon" />);
    getByTestId("oauth-avatar").click();
    expect(NextAuth.signIn).toHaveBeenCalledWith("test-icon");
  });
});
