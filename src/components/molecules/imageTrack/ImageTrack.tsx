import { ImageTrackArrow } from "@/components/atoms/imageTrackArrow";
import { ImageTrackDirection } from "@/enums/eCommerceEnums";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ReactNode, useCallback, useEffect, useRef } from "react";
import styles from "./ImageTrack.module.css";
interface ImageTrackProps {
  children: ReactNode;
  checked: boolean[];
  imageRef: React.MutableRefObject<{
    [key: string]: HTMLImageElement | null;
  }>;
}

export function ImageTrack({ children, checked, imageRef }: ImageTrackProps) {
  const imageTrackRef = useRef<HTMLDivElement>(null);
  const THIRD_OF_SCREEN_X = 33;
  const HALF_OF_IMAGE_X = 50;
  const START_OF_IMAGE_X = 0;

  const handleClick = useCallback(
    (dir: ImageTrackDirection) => {
      if (!imageTrackRef.current) return;
      let trackTranslate;
      let imageTranslate;
      if (dir === ImageTrackDirection.LEFT) {
        trackTranslate = -THIRD_OF_SCREEN_X;
        imageTranslate = HALF_OF_IMAGE_X;
      } else {
        trackTranslate = THIRD_OF_SCREEN_X;
        imageTranslate = START_OF_IMAGE_X;
      }
      imageTrackRef.current.style.transform = `translate(${trackTranslate}%, -50%)`;
      for (let i of Object.keys(checked)) {
        if (imageRef.current && imageRef.current[i]) {
          imageRef.current[i].style.objectPosition = `${imageTranslate}% 50%`;
        }
      }
    },
    [checked, imageRef],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ImageTrackDirection.ARROW_LEFT) {
        handleClick(ImageTrackDirection.LEFT);
      } else if (event.key === ImageTrackDirection.ARROW_RIGHT) {
        handleClick(ImageTrackDirection.RIGHT);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClick]);

  return (
    <div
      ref={imageTrackRef}
      className={styles["image-track"]}
      style={{ transform: `translate(33%, -50%)` }}
    >
      <ImageTrackArrow
        handleClick={() => handleClick(ImageTrackDirection.LEFT)}
        ArrowIcon={KeyboardArrowLeftIcon}
      />
      {children}
      <ImageTrackArrow
        handleClick={() => handleClick(ImageTrackDirection.RIGHT)}
        ArrowIcon={KeyboardArrowRightIcon}
      />
    </div>
  );
}
