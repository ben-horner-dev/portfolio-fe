import { useRefs } from "@/contexts/refProvider";
import Image from "next/image";
import styles from "./Logo.module.css";

export const Logo = () => {
  const refs = useRefs();

  return (
    <Image
      data-testid="logo"
      className={styles.logo}
      src={refs?.hero.isVisible ? "logo.svg" : "logo_contrast.svg"}
      alt="Ben Horner"
      width={110}
      height={0}
    />
  );
};
