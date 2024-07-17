import { DEFAULT_DIMENSION, Visibility } from "@/enums/eCommerceEnums";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./ImageListItemImage.module.css";

interface ImageListItemProps {
  keyVal: number;
  imageRef: React.MutableRefObject<{
    [key: string]: HTMLImageElement | null;
  }>;
  handleProductHover: (key: number, bool: boolean) => () => void;
  prefix: string;
}

export const ImageListItemImage = ({
  keyVal,
  imageRef,
  handleProductHover,
  prefix,
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
      className={styles[`${prefix}-img`]}
      src={`/eCommerce/${prefix}_${keyVal + 1}.jpg`}
      alt={`${prefix}${keyVal + 1}`}
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
