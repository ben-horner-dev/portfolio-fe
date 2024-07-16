import { fireEvent, render } from "@testing-library/react";
import { ImageTrack } from "./ImageTrack";

// Mocking necessary styles and props
jest.mock("./styles.module.css", () => ({ "image-track": "image-track" }));

// Utility function to create a mock ref

describe("ImageTrack", () => {
  it("applies correct transform when the left button is clicked", () => {
    const mockImageRef = {
      current: [
        {
          style: {
            transform: "",
            objectPosition: "",
          },
        },
      ],
    };
    const { getByTestId } = render(
      <ImageTrack imageRef={mockImageRef} checked={{ 0: true }}>
        <></>
      </ImageTrack>,
    );

    fireEvent.click(getByTestId("KeyboardArrowLeftIcon"));

    // Assert the transformation for moving left
    expect(mockImageRef.current[0].style.objectPosition).toBe("50% 50%");
  });

  it("applies correct transform when the right button is clicked", () => {
    const mockImageRef = {
      current: [
        {
          style: {
            transform: "",
            objectPosition: "",
          },
        },
      ],
    };
    const { getByTestId } = render(
      <ImageTrack imageRef={mockImageRef} checked={{ 0: true }}>
        <></>
      </ImageTrack>,
    );

    fireEvent.click(getByTestId("KeyboardArrowRightIcon"));

    // Assert the transformation for moving right
    expect(mockImageRef.current[0].style.objectPosition).toBe("0% 50%");
  });
});
