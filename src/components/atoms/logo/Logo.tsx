import Image from "next/image";
import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <Image
      data-testid="logo"
      className={styles.logo}
      src="logo.svg"
      alt="Ben Horner"
      width={110}
      height={0}
    />
  );
};
