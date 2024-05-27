import { BlueLine } from "@/components/atoms/blueLine";
import { FadedText } from "@/components/atoms/fadedText";
import { SnapSectionContent } from "@/components/atoms/snapSectionContent";
import { UnFadedText } from "@/components/atoms/unFadedText/UnFadedText";
import { OAuth } from "@/components/molecules/oAuth";
import { useRefs } from "@/contexts/refProvider";
import { FlashType } from "@/enums/flashEnums";
import { useFlash } from "@/hooks/flashHooks";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./SectionContainer.module.css";

export function SectionContainer() {
  const flash = useFlash();
  const isOAuthVisible = useRefs()?.oauth.isVisible;
  const [text, setText] = useState("OAUTH FLOW");
  const [textClass, setTextClass] = useState("");
  const [contentClass, setContentClass] = useState("");
  const [content, setContent] = useState(<OAuth />);

  const fadeIn = () => {
    setTextClass("animate__animated animate__fadeInRight ");
    setContentClass("animate__animated animate__fadeInRight ");
  };

  const fadeOut = () => {
    setTextClass("animate__animated animate__fadeOutLeft ");
    setContentClass("animate__animated animate__fadeOutLeft ");
  };

  useEffect(() => {
    const handleChangeAnimationSingleState = (
      visibleState: boolean | undefined,
    ) => {
      visibleState ? fadeIn() : fadeOut();
    };
    handleChangeAnimationSingleState(isOAuthVisible);
  }, [isOAuthVisible]);

  const handleAnimationEnd = () => {
    if (isOAuthVisible) {
      fadeIn();
      if (text !== "OAUTH FLOW") {
        setText("OAUTH FLOW");
        setContent(<OAuth />);
        flash(
          "Log in below using your social media account. Don't worry I don't store any of your data.",
          FlashType.INFO,
        );
      }
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles["section-outer"]}>
        <Box className={styles["section-inner"]}>
          <FadedText
            text={text}
            textClass={textClass}
            handleAnimationEnd={handleAnimationEnd}
          />
          <UnFadedText text={text} textClass={textClass}>
            <BlueLine />
          </UnFadedText>
        </Box>
      </div>
      <SnapSectionContent content={content} contentClass={contentClass} />
    </div>
  );
}
