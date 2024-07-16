import { useAddProduct } from "@/hooks/addProduct";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton, ImageListItemBar } from "@mui/material";
import Grow from "@mui/material/Grow";
import styles from "./ImageListItemImageInfoProps.module.css";

interface ImageListItemImageInfoProps {
  prefix: string;
  keyVal: number;
  checked: boolean;
  handleProductHover: (key: number, bool: boolean) => () => void;
}

export const ImageListItemImageInfo = ({
  prefix,
  checked,
  handleProductHover,
  keyVal,
}: ImageListItemImageInfoProps) => {
  const capitalizedPrefix = prefix.charAt(0).toUpperCase() + prefix.slice(1);
  const addProduct = useAddProduct();
  return (
    <Grow in={checked}>
      <ImageListItemBar
        data-testid={`${prefix}-info`}
        onMouseEnter={handleProductHover(keyVal, true)}
        onMouseLeave={handleProductHover(keyVal, false)}
        className={styles[`${prefix}-info-bar`]}
        title={`${capitalizedPrefix} ${keyVal + 1}`}
        subtitle={`$${keyVal + 2}`}
        actionIcon={
          <IconButton
            data-testid={`${prefix}-btn`}
            className={styles[`${prefix}-icon-btn`]}
            onClick={addProduct({
              key: keyVal,
              product: `${capitalizedPrefix} ${keyVal + 1}`,
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
