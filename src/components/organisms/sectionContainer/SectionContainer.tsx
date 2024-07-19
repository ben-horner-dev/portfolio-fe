import { BlueLine } from "@/components/atoms/blueLine";
import { FadedText } from "@/components/atoms/fadedText";
import { ImageListItemImageInfo } from "@/components/atoms/imageListItemImageInfo";
import { ImageListItemPost } from "@/components/atoms/imageListItemPost/ImageListItemPost";
import { SnapSectionContent } from "@/components/atoms/snapSectionContent";
import { UnFadedText } from "@/components/atoms/unFadedText/UnFadedText";
import { ECommerce } from "@/components/molecules/eCommerce";
import { OAuth } from "@/components/molecules/oAuth";
import { useRefs } from "@/contexts/refProvider";
import { Prefix } from "@/enums/eCommerceEnums";
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
  const isSocialNetworkVisible = useRefs()?.network.isVisible;
  const eCommerceRef = useRefs()?.ecommerce.ref;
  const isContactVisible = useRefs()?.contact.isVisible;
  const socialNetworkRef = useRefs()?.network.ref;
  const heroRef = useRefs()?.hero.ref;
  const oAuthRef = useRefs()?.oauth.ref;
  const contactRef = useRefs()?.contact.ref;

  const [text, setText] = useState("");

  const [textClass, setTextClass] = useState("");
  const [contentClass, setContentClass] = useState("");
  const [content, setContent] = useState<React.ReactNode>(null);
  const [prevRef, setPrevRef] = useState<HTMLElement | null | undefined>(null);

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

    const handleChangeAnimationSocialNetworkECommerce = (
      visibleState: boolean | undefined,
    ) => {
      visibleState
        ? setTextClass("animate__animated animate__fadeInRight ")
        : setTextClass("animate__animated animate__fadeOutLeft ");
    };
    if (isSocialNetworkVisible) {
      if (prevRef === eCommerceRef?.current) {
        setTextClass("animate__animated animate__fadeOutLeft ");
      } else if (
        prevRef === oAuthRef?.current ||
        prevRef === contactRef?.current
      ) {
        fadeOut();
      } else {
        setTextClass("animate__animated animate__fadeOutLeft ");
      }
      setPrevRef(socialNetworkRef?.current);
      dispatch(setNavBarIcons({ icon: NavBarIconsEnums.SOCIAL }));
    } else if (isECommerceVisible) {
      if (prevRef === socialNetworkRef?.current) {
        setTextClass("animate__animated animate__fadeOutLeft ");
      } else if (prevRef === oAuthRef?.current) {
        fadeOut();
      }
      setPrevRef(eCommerceRef?.current);
      handleChangeAnimationSocialNetworkECommerce(isOAuthVisible);
      dispatch(setNavBarIcons({ icon: NavBarIconsEnums.SHOPPING_CART }));
    } else if (isOAuthVisible) {
      setPrevRef(oAuthRef?.current);
      handleChangeAnimationSingleState(isECommerceVisible);
      dispatch(setNavBarIcons({ icon: NavBarIconsEnums.USER }));
    } else if (isHeroVisible) {
      setPrevRef(heroRef?.current);
      fadeIn();
      setText("");
      setContent(<></>);
      dispatch(closeAlert());
    } else if (isContactVisible) {
      setPrevRef(contactRef?.current);
      fadeIn();
      setText("");
      setContent(<></>);
      dispatch(closeAlert());
    }
  }, [
    isOAuthVisible,
    isECommerceVisible,
    isHeroVisible,
    isSocialNetworkVisible,
    dispatch,
    eCommerceRef,
    socialNetworkRef,
    prevRef,
    setPrevRef,
    oAuthRef,
    heroRef,
  ]);

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
        setContent(
          <ECommerce
            InfoElement={ImageListItemImageInfo}
            prefix={Prefix.PRODUCT}
          />,
        );
        flash(
          "Select Products above to add to your shopping cart.",
          FlashType.INFO,
        );
      }
    } else if (isSocialNetworkVisible) {
      fadeIn();
      if (text !== "NETWORK") {
        setText("NETWORK");
        setContent(
          <ECommerce InfoElement={ImageListItemPost} prefix={Prefix.SOCIALS} />,
        );
        flash(
          "Please scroll through the image feed below. You can follow or unfollow other users and like or unlike images.",
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
