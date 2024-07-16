import { alertReducer } from "@/slices/alertSlice";
import { navBarIconsReducer } from "@/slices/navBarIconsSlice";
import { sectionReducer } from "@/slices/sectionSlice";
import { shoppingCartReducer } from "@/slices/shoppingCartSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  alert: alertReducer,
  section: sectionReducer,
  shoppingCart: shoppingCartReducer,
  navBarIcons: navBarIconsReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
