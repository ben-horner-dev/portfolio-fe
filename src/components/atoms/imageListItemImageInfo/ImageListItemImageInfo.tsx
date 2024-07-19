import { useAddProduct } from "@/hooks/addProduct";
import { ImageListItemImageInfoProps } from "@/types/EcommerceTypes";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton, ImageListItemBar } from "@mui/material";
import Grow from "@mui/material/Grow";
import styles from "./ImageListItemImageInfo.module.css";

export const ImageListItemImageInfo = ({
  checked,
  handleProductHover,
  keyVal,
}: ImageListItemImageInfoProps) => {
  const addProduct = useAddProduct();
  return (
    <Grow in={checked}>
      <ImageListItemBar
        data-testid={`product-info`}
        onMouseEnter={handleProductHover(keyVal, true)}
        onMouseLeave={handleProductHover(keyVal, false)}
        className={styles[`product-info-bar`]}
        title={`Product ${keyVal + 1}`}
        subtitle={`$${keyVal + 2}`}
        actionIcon={
          <IconButton
            data-testid={`product-btn`}
            className={styles[`product-icon-btn`]}
            onClick={addProduct({
              key: keyVal,
              product: `Product ${keyVal + 1}`,
              price: keyVal + 2,
            })}
          >
            <AddShoppingCartIcon />
          </IconButton>
        }
      />
    </Grow>
  );
};
