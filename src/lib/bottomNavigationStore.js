import { configureStore } from "@reduxjs/toolkit";
import { selectNavigation } from "src/stories/BottomNavigations/BottomNavigationSlice";

export const bottomNavigationStore = configureStore({
  reducer: {
    selectNavigation: selectNavigation.reducer,
  },
});
