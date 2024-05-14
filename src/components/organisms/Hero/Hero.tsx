import { ContactBtn } from "@/components/atoms/contactBtn";
import { Text } from "@/components/atoms/text";
import CenteredTextBox from "@/components/molecules/centeredTextBox/CenteredTextBox";
import { SlideDownAnimation } from "@/components/molecules/slideDownAnimation";
import { useRefs } from "@/contexts/refProvider";
import {
  FULL_SCREEN_SITE_TEXT,
  MOBILE_SCREEN_SITE_TEXT,
  SUB_HEADER,
} from "@/enums/heroEnums";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import style from "./Hero.module.css";

export function Hero() {
  const refs = useRefs();
  const heroRef = refs?.hero.ref;

  return (
    <Box
      ref={heroRef}
      data-testid="container"
      className={`${style.container} snap-section`}
    >
      <CenteredTextBox>
        <SlideDownAnimation>
          <Typography variant="h2" data-testid="subheader">
            {SUB_HEADER}
          </Typography>
          <Text className={"full-screen-text"} text={FULL_SCREEN_SITE_TEXT} />
          <Text
            className={"mobile-screen-text"}
            text={MOBILE_SCREEN_SITE_TEXT}
          />
          <ContactBtn />
        </SlideDownAnimation>
      </CenteredTextBox>
    </Box>
  );
}
