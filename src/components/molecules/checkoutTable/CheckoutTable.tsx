import { CheckoutTableFooter } from "@/components/atoms/checkoutTableFooter";
import { CheckoutTableHeader } from "@/components/atoms/checkoutTableHeader";
import { CheckoutTablePaymentRow } from "@/components/atoms/checkoutTablePayment";
import { CheckoutTableRow } from "@/components/atoms/checkoutTableRow";
import { useAppSelector } from "@/hooks";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TableHead from "@mui/material/TableHead";
import styles from "./CheckoutTable.module.css";

export const CheckoutTable = () => {
  const shoppingCart = useAppSelector((state) => state.shoppingCart.items);

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={styles["shopping-cart-table"]}>
          <TableHead className={styles["shopping-cart-header"]}>
            <CheckoutTableHeader />
          </TableHead>
          <TableBody>
            {shoppingCart &&
              Object.entries(shoppingCart).map(([key, item]) => (
                <CheckoutTableRow keyVal={key} item={item} key={key} />
              ))}
          </TableBody>
          <TableFooter>
            <CheckoutTableFooter />
          </TableFooter>
        </Table>
      </TableContainer>
      <CheckoutTablePaymentRow />
    </>
  );
};
