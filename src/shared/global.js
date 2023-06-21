import { createGlobalStyle, css } from "styled-components";

export const fontUrl =
  "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900";

export const bodyStyles = css`
  body,
  html,
  pre {
    width: 100%;
    height: 100%;
    font-family: Spoqa Han Sans, Noto Sans KR, HelveticaNeue-Light, sans-serif !important;
  }
  html {
    color: #999;
    font-size: 100%;
    -webkit-text-size-adjust: none;
    -ms-text-size-adjust: none;
  }
  article,
  aside,
  audio,
  blockquote,
  body,
  canvas,
  code,
  dd,
  details,
  div,
  dl,
  dt,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  input,
  legend,
  li,
  mark,
  menu,
  nav,
  ol,
  p,
  pre,
  section,
  summary,
  td,
  textarea,
  th,
  time,
  ul,
  video {
    padding: 0;
    margin: 0;
  }
  body {
    background-color: #e1e3e8;
    color: #5f5f5f;
    font-size: 14px;
    line-height: 1.4;
    letter-spacing: -0.3px;
  }
  img {
    max-width: 100%;
    border: 0;
    vertical-align: middle;
  }
  button,
  input,
  select,
  textarea {
    padding: 0;
    margin: 0;
    color: fieldtext;
    font-size: 100%;
    font-family: Spoqa Han Sans, Noto Sans KR, HelveticaNeue-Light, sans-serif;
    vertical-align: middle;
  }
  input::placeholder,
  textarea::placeholder {
    color: #9fa7af;
  }
  /* input:not([type=radio]):not([type=checkbox]):not([type=text]){ border: 1px solid #e6eaee;border-radius:0;-webkit-appearance:none; } */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
  a {
    color: #27323c;
  }
  a:hover,
  a:active {
    color: inherit;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
  table {
    border-spacing: 0;
    border-collapse: collapse;
  }
  fieldset {
    border: 0;
  }
  legend {
    color: #000;
  }
  address,
  caption,
  cite,
  code,
  dfn,
  em,
  strong,
  th,
  var {
    font-weight: 400;
    font-style: normal;
  }
  strong {
    font-weight: 700;
  }
  em {
    font-style: initial;
  }
  ol,
  ul {
    list-style: none;
  }
  caption,
  th {
    text-align: left;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
    font-size: 100%;
    line-height: 1;
  }
  caption,
  hr,
  legend {
    width: 0;
    height: 0;
    font-size: 1px;
    line-height: 0;
    text-indent: -9999em;
  }
  a,
  a:active,
  a:focus,
  a:hover,
  a:link,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }
  hr {
    width: 100%;
    margin: 0;
    border: none;
    border-bottom: 1px solid #edf0f2;
  }
  * {
    box-sizing: border-box;
    overflow-wrap: anywhere;
    outline: none;
  }
  h1 {
    color: #161b20;
    font-weight: bold;
    font-size: 24px;
  }
  h2 {
    color: #161b20;
    font-weight: normal;
    font-size: 20px;
  }
  h3 {
    color: #161b20;
    font-weight: normal;
    font-size: 16px;
  }

  #__next {
    height: 100%;
  }
`;

export const GlobalStyle = createGlobalStyle`
 html {
   ${bodyStyles}
 }`;
