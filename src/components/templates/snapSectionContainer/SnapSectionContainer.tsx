import { SnapSections } from "@/components/molecules/snapSections";
import { useAppSelector } from "@/hooks";
import styles from "./SnapSectionContainer.module.css";

interface SnapSectionProps {
  children: React.ReactNode;
}

export function SnapSectionContainer({ children }: SnapSectionProps) {
  const snapSectionHeight = 100;
  const sectionLength = useAppSelector(
    (state) => state.section.length,
  ) as number;

  return (
    <div
      className={styles["snap-section-container"]}
      style={{ height: `${snapSectionHeight * sectionLength}vh` }}
    >
      <SnapSections />
      <div className={styles["sticky-inner-section"]}>{children}</div>
    </div>
  );
}
