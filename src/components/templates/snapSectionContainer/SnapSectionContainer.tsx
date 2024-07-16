import { SnapSections } from "@/components/molecules/snapSections";
import { useRefs } from "@/contexts/refProvider";
import styles from "./SnapSectionContainer.module.css";
interface SnapSectionProps {
  children: React.ReactNode;
}

export function SnapSectionContainer({ children }: SnapSectionProps) {
  const refs = useRefs();
  const snapSectionHeight = 100;

  const oAuthRef = refs?.oauth.ref as React.RefObject<HTMLDivElement>;
  const eCommerceRef = refs?.ecommerce.ref as React.RefObject<HTMLDivElement>;
  const sections = [
    {
      name: "eCommerce",
      ref: eCommerceRef,
      className: "inner-snap-section",
    },
  ];
  const topSections = [
    {
      name: "oauth",
      ref: oAuthRef,
      className: "inner-snap-section-top",
    },
  ];
  return (
    <div
      className={styles["snap-section-container"]}
      style={{
        height: `${snapSectionHeight * (sections.length + topSections.length)}vh`,
      }}
    >
      <SnapSections sections={topSections} />
      <div className={styles["sticky-inner-section"]}>{children}</div>
      <SnapSections sections={sections} />
    </div>
  );
}
