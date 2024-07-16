import { ImageListItemImage } from "@/components/atoms/imageListItemImage";
import { ImageListItemImageInfo } from "@/components/atoms/imageListItemImageInfo";
import { ImageTrack } from "@/components/molecules/imageTrack";
import { Checkout } from "@/components/organisms/checkout";
import { Payment } from "@/components/organisms/Payment";
import { ECommerceAndSocialData } from "@/enums/eCommerceEnums";
import { ImageList, ImageListItem } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { useRef, useState } from "react";
import styles from "./ECommerce.module.css";

export function ECommerce() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const imageRef = useRef<{ [key: string]: HTMLImageElement | null }>({});
  const setInitialData = () => {
    return Object.assign(
      {},
      ECommerceAndSocialData.map((_, __) => false),
    );
  };
  const [checked, setChecked] = useState(setInitialData());

  const handleProductHover = (key: number, bool: boolean) => {
    return () => {
      setChecked({ ...setInitialData(), [key]: bool });
    };
  };

  return (
    <>
      <ImageTrack checked={checked} imageRef={imageRef}>
        <ImageList
          className={styles["center-image-list"]}
          gap={10}
          variant="quilted"
        >
          {ECommerceAndSocialData.map((_, key: number) => {
            return (
              <ImageListItem
                data-testid="product-image"
                key={`product_${key + 1}.jpg`}
                className={styles["image-list-item"]}
              >
                <ImageListItemImage
                  keyVal={key}
                  imageRef={imageRef}
                  handleProductHover={handleProductHover}
                  prefix="product"
                />
                <ImageListItemImageInfo
                  prefix="product"
                  keyVal={key}
                  checked={checked[key]}
                  handleProductHover={handleProductHover}
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </ImageTrack>
      <Checkout />
      {/* {clientSecret && stripePromise && ( */}
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <Payment />
      </Elements>
      {/* )} */}
    </>
  );
}
