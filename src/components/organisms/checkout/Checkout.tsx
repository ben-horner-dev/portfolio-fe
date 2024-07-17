import { CheckoutTable } from "@/components/molecules/checkoutTable";
import { Modal } from "@/components/molecules/modal";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setShowCart } from "@/slices/shoppingCartSlice";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "./Checkout.module.css";

export function Checkout() {
  const dispatch = useAppDispatch();

  const showCart = useAppSelector((state) => state.shoppingCart.showCart);
  const shoppingCart = useAppSelector((state) => state.shoppingCart.items);

  const handleClose = () => {
    dispatch(setShowCart(false));
  };

  return (
    <>
      {shoppingCart && (
        <Modal open={showCart} handleClose={handleClose}>
          <Box className={styles["shopping-cart-box"]}>
            <Typography variant="h5" gutterBottom component="div">
              Shopping Cart
            </Typography>

            {Object.keys(shoppingCart).length !== 0 ? (
              <CheckoutTable />
            ) : (
              <Typography gutterBottom component="div">
                You have no items in your cart
              </Typography>
            )}
          </Box>
        </Modal>
      )}
    </>
  );
}
