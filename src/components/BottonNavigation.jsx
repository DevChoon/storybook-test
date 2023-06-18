import { BasicCssBottomNavigation } from "@/stories/basicCss/BasicCssBottomNavigation";
import React from "react";

const BottonNavigation = () => {
  return (
    <BasicCssBottomNavigation
      onMoveToPage={() => {
        "/test", 1;
      }}
    />
  );
};

export default BottonNavigation;
