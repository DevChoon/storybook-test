import React from "react";
import { GlobalStyle } from "../src/shared/global";
// import * as NextImage from "next/image";
import * as NextImage from "next/image";
import { ThemeProvider } from "styled-components";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={{}}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// NextImage.defaultProps = {
//   unoptimized: true,
// };

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
// };
