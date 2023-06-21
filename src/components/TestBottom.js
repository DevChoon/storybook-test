import React from "react";
import { Provider } from "react-redux";
import { bottomNavigationStore } from "src/lib/bottomNavigationStore";
import { BottomNavigation } from "./BottomNavigation/BottomNavigation";

const TestBottom = () => {
  return (
    <>
      <div>짠짠</div>
      <Provider store={bottomNavigationStore}>
        <BottomNavigation />
      </Provider>
    </>
  );
};

export default TestBottom;
