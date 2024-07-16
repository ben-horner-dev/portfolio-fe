import { BlueLine } from "@/components/atoms/blueLine";
import { FadedText } from "@/components/atoms/fadedText";
import { SnapSectionContent } from "@/components/atoms/snapSectionContent";
import { UnFadedText } from "@/components/atoms/unFadedText/UnFadedText";
import { ECommerce } from "@/components/molecules/eCommerce";
import { OAuth } from "@/components/molecules/oAuth";
import { useRefs } from "@/contexts/refProvider";
import { FlashType } from "@/enums/flashEnums";
import { NavBarIconsEnums } from "@/enums/navBarIconEnums";
import { useAppDispatch } from "@/hooks";
import { useFlash } from "@/hooks/flashHooks";
import { closeAlert } from "@/slices/alertSlice";
import { setNavBarIcons } from "@/slices/navBarIconsSlice";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./SectionContainer.module.css";

export function SectionContainer() {
  const flash = useFlash();
  const dispatch = useAppDispatch();
  const isOAuthVisible = useRefs()?.oauth.isVisible;
  const isECommerceVisible = useRefs()?.ecommerce.isVisible;
  const isHeroVisible = useRefs()?.hero.isVisible;
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
    if (isECommerceVisible) {
      handleChangeAnimationSingleState(isOAuthVisible);
      dispatch(setNavBarIcons({ icon: NavBarIconsEnums.SHOPPING_CART }));
    } else if (isOAuthVisible) {
      handleChangeAnimationSingleState(isECommerceVisible);
      dispatch(setNavBarIcons({ icon: NavBarIconsEnums.USER }));
    } else if (isHeroVisible) {
      fadeIn();
      setText("");
      setContent(<></>);
      dispatch(closeAlert());
    }
  }, [isOAuthVisible, isECommerceVisible, isHeroVisible, dispatch]);

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
    } else if (isECommerceVisible) {
      fadeIn();
      if (text !== "E-COMMERCE") {
        setText("E-COMMERCE");
        setContent(<ECommerce />);
        flash(
          "Select Products above to add to your shopping cart.",
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
