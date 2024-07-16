import { CheckoutColumns } from "@/enums/eCommerceEnums";
import { useAppSelector } from "@/hooks";
import { ShoppingCart } from "@/types/EcommerceTypes";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export const calculateTotal = (shoppingCart: ShoppingCart | null) => {
  return shoppingCart
    ? Object.values(shoppingCart).reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.qty * currentValue.price,
        0,
      )
    : 0;
};

export const CheckoutTableFooter = () => {
  const shoppingCart = useAppSelector((state) => state.shoppingCart.items);

  return (
    <TableRow>
      <TableCell></TableCell>
      {Object.values(CheckoutColumns).map((column, index) => {
        if (index === Object.values(CheckoutColumns).length - 2) {
          return (
            <TableCell align="right" key={index}>
              Total
            </TableCell>
          );
        } else if (index === Object.values(CheckoutColumns).length - 1) {
          return (
            <TableCell align="right" key={index}>
              ${calculateTotal(shoppingCart)}
            </TableCell>
          );
        }
        return <TableCell key={column} align="right"></TableCell>;
      })}
    </TableRow>
  );
};
