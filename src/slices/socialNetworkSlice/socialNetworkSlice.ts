import { ECommerceAndSocialData } from "@/enums/eCommerceEnums";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface SocialNetworkState {
  userData: typeof ECommerceAndSocialData;
  liked: { [key: number]: boolean };
  showFriends: boolean;
  showMessages: boolean;
  user: string | null;
}

const initialState: SocialNetworkState = {
  userData: ECommerceAndSocialData,
  liked: Object.assign(
    {},
    ECommerceAndSocialData.map(() => false),
  ),
  showFriends: false,
  showMessages: false,
  user: null,
};

export const socialNetworkSlice = createSlice({
  name: "socialNetwork",
  initialState,
  reducers: {
    setUserData: (
      state,
      action: PayloadAction<{ userData: typeof ECommerceAndSocialData }>,
    ) => {
      state.userData = action.payload.userData;
    },
    setLiked: (
      state,
      action: PayloadAction<{ liked: { [key: number]: boolean } }>,
    ) => {
      state.liked = action.payload.liked;
    },
    setShowFriends: (state, action: PayloadAction<boolean>) => {
      state.showFriends = action.payload;
      if (!action.payload) {
        state.user = null;
      }
    },
    setShowMessages: (state, action: PayloadAction<boolean>) => {
      state.showMessages = action.payload;
    },
    setUser: (state, action: PayloadAction<string | null>) => {
      state.user = action.payload;
    },
    setFollowUser: (state, action: PayloadAction<string>) => {
      state.userData = state.userData.map((user) => {
        if (user.name === action.payload) {
          return { ...user, followed: !user.followed };
        }
        return user;
      });
    },
    setMessage: (
      state,
      action: PayloadAction<{
        user: string;
        msg: { sender: string; msg: string };
      }>,
    ) => {
      state.userData = state.userData.map((user) => {
        if (user.name === action.payload.user) {
          return {
            ...user,
            messages: [...user.messages, action.payload.msg],
          };
        }
        return user;
      });
    },
  },
});

export const {
  setLiked,
  setUserData,
  setShowFriends,
  setShowMessages,
  setUser,
  setFollowUser,
  setMessage,
} = socialNetworkSlice.actions;

export const socialNetworkSliceReducer = socialNetworkSlice.reducer;
