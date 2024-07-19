import { setupStore } from "@/lib";
import { renderWithProviders } from "@/utils/testUtils";
import { waitFor } from "@testing-library/react";
import { ImageListItemPost } from "./ImageListItemPost";

describe("Image List Item Post", () => {
  it("Check like icon", async () => {
    const store = setupStore({
      socialNetwork: {
        liked: {
          1: true,
        },
      },
    });
    const handleProductHover = jest.fn();
    const keyVal = 1;
    const { getByTestId, getAllByRole } = renderWithProviders(
      <ImageListItemPost
        handleProductHover={handleProductHover}
        keyVal={keyVal}
      />,
      { store },
    );
    const favBtn = getByTestId("show-friends-btn");
    favBtn.click();
    const likeIcon = getByTestId("FavoriteIcon");
    expect(likeIcon).toBeInTheDocument();
    likeIcon.parentElement.click();
    await waitFor(() => {
      const likeIconAfterClick = getByTestId("FavoriteBorderIcon");
    });
  });
});
