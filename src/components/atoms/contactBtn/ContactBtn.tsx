import { useRefs } from "@/contexts/refProvider";
import Button from "@mui/material/Button";

export function ContactBtn() {
  const refs = useRefs();
  const contactRef = refs?.contact.ref;

  const handleContactBtnCLick = () => {
    contactRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      size="large"
      className={"mt-5 border border-white font-semibold normal-case"}
      variant="outlined"
      color="primary"
      onClick={handleContactBtnCLick}
    >
      Contact
    </Button>
  );
}
