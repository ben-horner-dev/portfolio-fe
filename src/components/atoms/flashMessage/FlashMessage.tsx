import { useAppDispatch, useAppSelector } from "@/hooks";
import { closeAlert } from "@/slices/alertSlice";
import Alert from "@mui/material/Alert";
import Slide, { SlideProps } from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";

import React from "react";

import styles from "./FlashMessage.module.css";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}
export function FlashMessage() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.alert.open);
  const message = useAppSelector((state) => state.alert.message);
  const severity = useAppSelector((state) => state.alert.severity);

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(closeAlert());
  };

  return (
    <div>
      <Snackbar
        TransitionComponent={SlideTransition}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          className={styles.alert}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
