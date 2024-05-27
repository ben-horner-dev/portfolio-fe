import { useRefs } from "@/contexts/refProvider";
import { render, screen } from "@testing-library/react";
import { useSession } from "next-auth/react";
import { UserAvatar } from "./UserAvatar";

jest.mock("next-auth/react");
jest.mock("@/contexts/refProvider");

describe("UserAvatar", () => {
  it("renders user avatar when session exists", () => {
    useSession.mockReturnValue({
      data: {
        user: {
          name: "Test User",
        },
      },
    });

    useRefs.mockReturnValue({
      hero: {
        isVisible: false,
      },
    });

    render(<UserAvatar />);

    const avatar = screen.getByRole("button");
    expect(avatar).toBeInTheDocument();
  });

  it("does not render user avatar when session does not exist", () => {
    useSession.mockReturnValue({ data: null });

    render(<UserAvatar />);

    const avatar = screen.queryByRole("button");
    expect(avatar).not.toBeInTheDocument();
  });
});
