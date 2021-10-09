import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/provider";
import { theme } from "@chakra-ui/theme";
import { Provider } from "react-redux";
import { store } from "./app/store";
ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);
