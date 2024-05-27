import { useRefs } from "@/contexts/refProvider";
import { useAppDispatch } from "@/hooks";
import { setSectionLength } from "@/slices/sectionSlice";
import { Section } from "@/types/intersectionTypes";
import styles from "./SnapSections.module.css";

export const SnapSections = () => {
  const refs = useRefs();
  const dispatch = useAppDispatch();
  const oAuthRef = refs?.oauth.ref as React.RefObject<HTMLDivElement>;
  const sections = [
    {
      name: "oauth",
      ref: oAuthRef,
    },
  ];
  dispatch(setSectionLength({ length: sections.length }));
  return (
    <>
      {sections.map((section: Section, index: number) => {
        return (
          <div
            key={index}
            id={section.name}
            data-testid="oauth"
            className={
              index == 0
                ? styles["inner-snap-section-top"]
                : styles["inner-snap-section"]
            }
            ref={section.ref}
          />
        );
      })}
    </>
  );
};
