import { Section } from "@/types/intersectionTypes";
import styles from "./SnapSections.module.css";

interface SnapSectionsProps {
  sections: Section[];
}

export const SnapSections = ({ sections }: SnapSectionsProps) => {
  return (
    <>
      {sections.map((section: Section, index: number) => {
        return (
          <div
            key={index}
            id={section.name}
            data-testid={section.name.toLowerCase()}
            className={styles[section.className]}
            ref={section.ref}
          />
        );
      })}
    </>
  );
};
