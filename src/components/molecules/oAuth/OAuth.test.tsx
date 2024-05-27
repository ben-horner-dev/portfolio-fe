import { OAuthEnums } from "@/enums/oAuthEnums";
import { capitalize } from "@mui/material";
import { render } from "@testing-library/react";
import { OAuth } from "./OAuth";

describe("OAuth", () => {
  it("renders without crashing and displays correct icons and text", () => {
    const { getByText } = render(<OAuth />);

    const oAuthIcons = Object.values(OAuthEnums);
    oAuthIcons.forEach((icon) => {
      const iconElement = getByText(capitalize(icon));
      expect(iconElement).toBeInTheDocument();
    });
  });
});
