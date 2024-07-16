import { useAppDispatch } from "@/hooks";
import { setShowCart, setShowPayment } from "@/slices/shoppingCartSlice";
import { Grid, IconButton } from "@mui/material";
import Image from "next/image";
import styles from "./CheckoutTablePayment.module.css";
export const CheckoutTablePaymentRow = () => {
  const dispatch = useAppDispatch();
  const handlePayClick = () => {
    dispatch(setShowCart(false));
    dispatch(setShowPayment(true));
  };
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      className={styles.container}
    >
      <Grid container item md={12} alignItems="center" justifyContent="center">
        <IconButton onClick={handlePayClick} disableRipple aria-label="delete">
          <Image
            src="./checkout/stripe.svg"
            alt="stripe"
            width="100"
            height="100"
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};
