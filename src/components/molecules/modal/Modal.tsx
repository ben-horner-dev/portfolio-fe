import { Dialog } from "@mui/material";
import Slide, { SlideProps } from "@mui/material/Slide";
import React, { ReactElement } from "react";
import styles from "./Modal.module.css";
const Transition = React.forwardRef(function Transition(
  props: SlideProps & { children?: ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface ModalProps {
  children: ReactElement;
  open: boolean;
  handleClose: () => void;
}

export function Modal({ children, open, handleClose }: ModalProps) {
  return (
    <Dialog
      className={styles.modal}
      maxWidth={false}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      {children}
    </Dialog>
  );
}
