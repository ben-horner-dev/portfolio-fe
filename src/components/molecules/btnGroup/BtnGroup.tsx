import { useRefs } from "@/contexts/refProvider";
import { BTN_ITEMS } from "@/enums/navBarIconEnums";
import { Button, ButtonGroup } from "@mui/material";
import { ReactNode } from "react";
import styles from "./BtnGroup.module.css";

export function BtnGroup({ children }: { children: ReactNode }) {
  const refs = useRefs();
  const isHeroVisible = refs?.hero.isVisible;
  const btnColor = isHeroVisible ? "primary" : "secondary";

  const handleClick = (key: string) => {
    if (!refs) return;
    const lowerKey = key.toLowerCase() as keyof typeof refs;
    const ref = refs[lowerKey].ref;
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ButtonGroup className={styles["menu-btns"]} data-testid="menu-btns">
      {children}
      {BTN_ITEMS.map((item, idx) => {
        return (
          <Button
            onClick={() => handleClick(item)}
            variant="outlined"
            className={styles["menu-btn"]}
            key={`btn-${idx}`}
            color={btnColor}
            disableRipple
          >
            {item}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}
