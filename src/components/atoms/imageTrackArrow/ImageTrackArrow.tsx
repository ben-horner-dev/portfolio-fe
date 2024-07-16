import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./ImageTrackArrow.module.css";

interface ImageTrackArrowProps {
  handleClick: () => void;
  ArrowIcon: typeof KeyboardArrowLeftIcon | typeof KeyboardArrowRightIcon;
}

export const ImageTrackArrow = ({
  handleClick,
  ArrowIcon,
}: ImageTrackArrowProps) => {
  return (
    <div className={styles["blink-me"]}>
      <ArrowIcon
        onClick={handleClick}
        className={styles["keyboard-left-icon"]}
      />
    </div>
  );
};
