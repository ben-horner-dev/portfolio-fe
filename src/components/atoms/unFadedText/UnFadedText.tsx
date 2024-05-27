import styles from "./UnFadedText.module.css";

interface UnFadedTextProps {
  text: string;
  textClass: string;
  children: React.ReactNode;
}

export const UnFadedText = ({
  text,
  textClass,
  children,
}: UnFadedTextProps) => {
  return (
    <div className={`${textClass} ${styles["unfaded-text"]}`} draggable="false">
      {text}
      {text && children}
    </div>
  );
};
