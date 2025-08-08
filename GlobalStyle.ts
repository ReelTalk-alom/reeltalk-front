"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body { height: 100%; }
  body {
    overflow-x: hidden; 
  }
  a { text-decoration: none; color: inherit; }
  * { box-sizing: border-box; }
`;
