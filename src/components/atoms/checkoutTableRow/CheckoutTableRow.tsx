import { useAppDispatch, useAppSelector } from "@/hooks";
import { useAddProduct } from "@/hooks/addProduct";
import { setShoppingCartItems } from "@/slices/shoppingCartSlice";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Stack } from "@mui/system";
import styles from "./CheckoutTableRow.module.css";

interface CheckoutTableRowProps {
  keyVal: string;
  item: {
    product: string;
    price: number;
    qty: number;
  };
}

export const CheckoutTableRow = ({ keyVal, item }: CheckoutTableRowProps) => {
  const addProduct = useAddProduct();
  const shoppingCart = useAppSelector((state) => state.shoppingCart.items);
  const ZERO_INDEX_OFFSET = 1;
  const dispatch = useAppDispatch();
  const handleAdd = (key: string) => {
    if (!shoppingCart) return;
    addProduct({ ...shoppingCart[key], key: parseInt(key) })();
  };

  const handleRemove = (key: string) => {
    if (!shoppingCart) return;
    const qty = shoppingCart[key].qty - 1;
    dispatch(
      setShoppingCartItems({
        ...shoppingCart,
        [key]: { ...shoppingCart[key], qty: qty },
      }),
    );
    if (shoppingCart[key].qty === 0) {
      const newCart = Object.fromEntries(
        Object.entries(shoppingCart).filter(([k]) => k !== key),
      );
      dispatch(setShoppingCartItems(newCart));
    }
  };

  return (
    <TableRow
      key={keyVal}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <TableCell component="th" scope="row">
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            alt={`Avatar n°${keyVal}`}
            src={`/eCommerce/product_${parseInt(keyVal) + ZERO_INDEX_OFFSET}.jpg`}
          />
          <div className={styles["product-name-txt"]}>{item.product}</div>
        </Stack>
      </TableCell>
      <TableCell align="right">${item.price}</TableCell>
      <TableCell align="right">
        <IconButton onClick={() => handleAdd(keyVal)} data-testid="add-btn">
          <AddCircleOutlineIcon />
        </IconButton>
      </TableCell>
      <TableCell align="right">
        <IconButton onClick={() => handleRemove(keyVal)} data-testid="rm-btn">
          <RemoveCircleOutlineIcon />
        </IconButton>
      </TableCell>
      <TableCell align="right">{item.qty}</TableCell>
      <TableCell align="right">${`${item.qty * item.price}`}</TableCell>
    </TableRow>
  );
};
