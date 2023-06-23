import React from "react";
import { BottomNavigation } from "./BottomNavigation";
import { Provider } from "react-redux";
import { bottomNavigationStore } from "src/lib/bottomNavigationStore";

export default {
  title: "BottomNavigation",
  component: BottomNavigation,
  decorators: [(story) => <div className="test">{story()}</div>],
  tags: ["autodocs"],
  argTypes: {
    display: {
      options: ["light-mode", "dark-mode"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <BottomNavigation {...args} />;

export const LightMode = Template.bind({});
LightMode.args = {
  display: "light-mode",
};
LightMode.decorators = [
  (story) => <Provider store={bottomNavigationStore}>{story()}</Provider>,
];

export const DarkMode = Template.bind({});
DarkMode.args = {
  display: "dark-mode",
};
DarkMode.decorators = [
  (story) => <Provider store={bottomNavigationStore}>{story()}</Provider>,
];
