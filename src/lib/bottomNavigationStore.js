import { configureStore } from "@reduxjs/toolkit";
import { selectNavigation } from "src/components/BottomNavigation/BottomNavigationSlice";

export const bottomNavigationStore = configureStore({
  reducer: {
    selectNavigation: selectNavigation.reducer,
  },
});
