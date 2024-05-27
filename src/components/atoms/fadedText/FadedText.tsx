import styles from "./FadedText.module.css";

interface FadedTextProps {
  text: string;
  textClass: string;
  handleAnimationEnd: () => void;
}

export const FadedText = ({
  text,
  textClass,
  handleAnimationEnd,
}: FadedTextProps) => {
  return (
    <div
      className={`${textClass} ${styles["faded-text"]}`}
      draggable="false"
      onAnimationEnd={handleAnimationEnd}
      data-testid="faded-text"
    >
      {text}
    </div>
  );
};
