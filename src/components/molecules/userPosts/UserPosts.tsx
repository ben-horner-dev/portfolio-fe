import { useAppSelector } from "@/hooks";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import styles from "./UserPosts.module.css";

function srcset(
  image: string,
  width: number,
  height: number,
  rows: number = 1,
  cols: number = 1,
) {
  return {
    src: `/eCommerce/${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `/eCommerce/${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const UserPosts = ({ user }: { user: string }) => {
  const userData = useAppSelector((state) => state.socialNetwork.userData);
  return (
    <ImageList className={styles["user-result-image-list"]} gap={1}>
      {userData
        .filter((newUser) => newUser.name === user)[0]
        .posts.map((item) => {
          return (
            <ImageListItem key={item.src} cols={1} rows={1}>
              <Image
                {...srcset(`${item.src}.jpg`, 100, 50, 1, 1)}
                alt={item.src}
                loading="lazy"
                className={styles["image-list-image"]}
                height={500}
                width={1000}
              />
            </ImageListItem>
          );
        })}
    </ImageList>
  );
};
