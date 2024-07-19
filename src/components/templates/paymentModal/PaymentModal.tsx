import { Modal } from "@/components/molecules/modal";
import { FlashType } from "@/enums/flashEnums";
import { useAppDispatch, useAppSelector, useFlash } from "@/hooks";
import { setShowPayment } from "@/slices/shoppingCartSlice";
import { Box, Button, Typography } from "@mui/material";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import styles from "./PaymentModal.module.css";

export function PaymentModal() {
  const dispatch = useAppDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const showPayment = useAppSelector((state) => state.shoppingCart.showPayment);
  const flash = useFlash();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // const response = "tets";
    // response().then((data) => {
    //     setStripePromise(loadStripe(data.body.public_key));
    // });
    // const secondReseponse = async () =>
    //     await api.get("/generate_payment_intent");
    // secondReseponse().then((data) => {
    //     setClientSecret(data.body.client_secret);
    // });
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/#ecommerce`,
      },
      redirect: "if_required",
    });

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        flash(error.message as string, FlashType.ERROR);
      } else {
        flash("An unexpected error occured.", FlashType.ERROR);
      }
    } else {
      flash("Payment successful!", FlashType.ERROR);
      // setShoppingCart({});
    }

    setIsProcessing(false);
  };

  return (
    <Modal
      open={showPayment}
      handleClose={() => {
        dispatch(setShowPayment(false));
      }}
    >
      <Box className={styles["payment-form-container"]}>
        <Typography
          variant="h1"
          className={styles["payment-form-container-title"]}
        >
          Payment
        </Typography>

        <form
          id={styles["payment-form"]}
          onSubmit={handleSubmit}
          className={styles["form-class"]}
        >
          <PaymentElement id={styles["payment-element"]} />
          <Button
            fullWidth
            variant="contained"
            id={styles.submit}
            type="submit"
            disabled={isProcessing || !stripe || !elements}
          >
            <span id={styles["button-text"]}>
              {isProcessing ? "Processing ... " : "Pay now"}
            </span>
          </Button>
          {message && (
            <Typography id={styles["payment-message"]}>{message}</Typography>
          )}
        </form>
      </Box>
    </Modal>
  );
}
