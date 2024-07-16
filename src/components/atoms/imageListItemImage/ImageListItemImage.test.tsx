import { fireEvent, render, waitFor } from "@testing-library/react";
import { ImageListItemImage } from "./ImageListItemImage"; // Adjust the import path as necessary

describe("ImageListItemImage visibility onLoad", () => {
  it("should be initially invisible", () => {
    const { getByTestId } = render(
      <ImageListItemImage
        keyVal={9}
        imageRef={{
          current: {
            9: null,
          },
        }}
        handleProductHover={(key: number, bool: boolean) => {}}
        prefix="prefix"
      />,
    );
    expect(getByTestId("image-list-item-image")).not.toBeVisible();
  });

  it("should become visible after onLoad event", async () => {
    const { getByTestId } = render(
      <ImageListItemImage
        keyVal={9}
        imageRef={{
          current: {
            9: null,
          },
        }}
        handleProductHover={(key: number, bool: boolean) => {}}
        prefix="prefix"
      />,
    );
    fireEvent.load(getByTestId("image-list-item-image"));
    await waitFor(() => {
      expect(getByTestId("image-list-item-image")).toBeVisible();
    });
  });
});
