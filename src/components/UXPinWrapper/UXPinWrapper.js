// eslint-disable-next-line no-unused-vars
import React from "react";
import { ThemeProvider } from '@ui5/webcomponents-react';


export default function UXPinWrapper({ children }) {

  return (<ThemeProvider>{children}</ThemeProvider>);
}