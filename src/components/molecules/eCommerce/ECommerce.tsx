import { ImageListItemImage } from "@/components/atoms/imageListItemImage";
import { ImageTrack } from "@/components/molecules/imageTrack";
import { Checkout } from "@/components/organisms/checkout";
import { MessagesModal } from "@/components/templates/messagesModal";
import { PaymentModal } from "@/components/templates/paymentModal";
import { UsersModal } from "@/components/templates/usersModal";
import { HoverClass, Prefix } from "@/enums/eCommerceEnums";
import { useAppSelector } from "@/hooks";
import { ImageList, ImageListItem } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { useRef, useState } from "react";
import styles from "./ECommerce.module.css";

interface InfoElementProps {
  keyVal: number;
  checked: boolean;
  handleProductHover: (key: number, bool: boolean) => () => void;
}
interface ECommerceProps {
  InfoElement: React.FC<InfoElementProps>;
  prefix: Prefix;
}

export function ECommerce({ InfoElement, prefix }: ECommerceProps) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const imageRef = useRef<{ [key: string]: HTMLImageElement | null }>({});
  const userData = useAppSelector((state) => state.socialNetwork.userData);
  const setInitialData = () => {
    return Object.assign(
      {},
      userData.map((_, __) => false),
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
          {userData.map((item, key: number) => {
            if (prefix === Prefix.SOCIALS && !item.followed) {
              return null;
            }
            const hoverClass =
              checked[key] || prefix === Prefix.SOCIALS
                ? HoverClass.HOVER
                : HoverClass.NO_HOVER;

            return (
              <ImageListItem
                data-testid="product-image"
                key={`product_${key + 1}.jpg`}
                className={styles["image-list-item"]}
              >
                <ImageListItemImage
                  hover={hoverClass}
                  keyVal={key}
                  imageRef={imageRef}
                  handleProductHover={handleProductHover}
                  prefix={prefix}
                />
                <InfoElement
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
        <PaymentModal />
      </Elements>
      {/* )} */}
      <UsersModal />
      <MessagesModal />
    </>
  );
}
