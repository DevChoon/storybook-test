import React from "react";
import { StyledComponentsBottomNavigation } from "./StyledComponentsBottomNavigation";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "styledComponents/StyledComponentsBottomNavigation",
  component: StyledComponentsBottomNavigation,
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    displayLight: {
      control: { type: "boolean" },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (

    <StyledComponentsBottomNavigation {...args} />


);

export const BasicMode = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicMode.args = {
  displayLight: false,
};

export const LightMode = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightMode.args = {
  displayLight: false,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  displayLight: true,
};
