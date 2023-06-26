import React from "react";
import { Provider } from "react-redux";
import { bottomNavigationStore } from "src/lib/bottomNavigationStore";
import { TestNav } from "./TestNav";

export default {
  title: "TestNav",
  component: TestNav,
  decorators: [(story) => <div className="test">{story()}</div>],
  tags: ["autodocs"],
  argTypes: {
    display: {
      options: ["light-mode", "dark-mode"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <TestNav {...args} />;

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
