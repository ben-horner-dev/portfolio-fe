import {
  DEFAULT_DIMENSION,
  HoverClass,
  Prefix,
  Visibility,
} from "@/enums/eCommerceEnums";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./ImageListItemImage.module.css";

interface ImageListItemProps {
  keyVal: number;
  imageRef: React.MutableRefObject<{
    [key: string]: HTMLImageElement | null;
  }>;
  handleProductHover: (key: number, bool: boolean) => () => void;
  prefix: Prefix;
  hover: HoverClass;
}

export const ImageListItemImage = ({
  keyVal,
  imageRef,
  handleProductHover,
  prefix,
  hover,
}: ImageListItemProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Image
      ref={(e: HTMLImageElement) => {
        imageRef.current[keyVal] = e;
      }}
      data-testid="image-list-item-image"
      width={DEFAULT_DIMENSION}
      height={DEFAULT_DIMENSION}
      className={`${styles[hover]} ${styles[`${prefix}-img`]}`}
      src={`/eCommerce/product_${keyVal + 1}.jpg`}
      alt={`product_${keyVal + 1}`}
      draggable="false"
      onMouseEnter={handleProductHover(keyVal, true)}
      onMouseLeave={handleProductHover(keyVal, false)}
      onLoad={() => setIsLoaded(true)}
      style={{
        visibility: isLoaded ? Visibility.VISIBLE : Visibility.HIDDEN,
      }}
    />
  );
};
