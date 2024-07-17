import { useRefs } from "@/contexts/refProvider";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setShowCart } from "@/slices/shoppingCartSlice";
import { ShoppingCart as ShoppingCartType } from "@/types/EcommerceTypes";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Fade, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import styles from "./ShoppingCart.module.css";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -3,
    color: "#fff",
    backgroundColor: "#EA4336",
    padding: "0 4px",
  },
}));

export const calculateTotalItems = (
  shoppingCartItems: ShoppingCartType | null,
) => {
  return shoppingCartItems
    ? Object.values(shoppingCartItems).reduce((acc, item) => acc + item.qty, 0)
    : 0;
};

export const ShoppingCart = () => {
  const dispatch = useAppDispatch();
  const refs = useRefs();
  const shoppingCartItems = useAppSelector((state) => state.shoppingCart.items);

  const handleClick = () => {
    if (shoppingCartItems) {
      dispatch(setShowCart(true));
    }
  };

  const isECommerceVisible = refs?.ecommerce.isVisible;
  return (
    <Fade in={isECommerceVisible}>
      <IconButton onClick={handleClick} data-testid="shopping-cart-btn">
        <StyledBadge
          invisible={false}
          badgeContent={calculateTotalItems(shoppingCartItems)}
        >
          <ShoppingCartOutlinedIcon className={styles.icon} />
        </StyledBadge>
      </IconButton>
    </Fade>
  );
};
