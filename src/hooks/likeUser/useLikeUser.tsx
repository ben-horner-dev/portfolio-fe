import { useAppDispatch, useAppSelector } from "@/hooks";
import { setLiked } from "@/slices/socialNetworkSlice";

export const useLikeUser = () => {
  const dispatch = useAppDispatch();
  const liked = useAppSelector((state) => state.socialNetwork.liked);

  const handleLike = (key: number) => {
    return () => {
      dispatch(
        setLiked({
          liked: {
            ...liked,
            [key]: !liked[key],
          },
        }),
      );
    };
  };

  return { handleLike };
};
