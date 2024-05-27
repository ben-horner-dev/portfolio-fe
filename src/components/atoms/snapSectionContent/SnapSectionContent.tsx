import styles from "./SnapSectionContent.module.css";

interface SnapSectionContentProps {
  content: React.ReactNode;
  contentClass: string;
}

export const SnapSectionContent = ({
  content,
  contentClass,
}: SnapSectionContentProps) => {
  return (
    <div className={`${contentClass} ${styles["content-container"]}`}>
      {content}
    </div>
  );
};
