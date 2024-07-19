import { GithubIcon } from "@/components/atoms/githubIcon";
import { LinkedInIcon } from "@/components/atoms/linkedInIcon";
import { useRefs } from "@/contexts/refProvider";
import Box from "@mui/material/Box";
import style from "./Footer.module.css";

export const Footer = () => {
  const refs = useRefs();
  const contactRef = refs?.contact.ref;

  return (
    <Box
      data-testid="container"
      className={`${style.container} snap-section`}
      ref={contactRef}
    >
      <a href="https://github.com/ben-horner-dev/portfolio" target="_blank">
        <GithubIcon />
      </a>
      <a href="https://www.linkedin.com/in/ben-horner-dev/" target="_blank">
        <LinkedInIcon />
      </a>
    </Box>
  );
};
