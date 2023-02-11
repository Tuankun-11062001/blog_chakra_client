import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import ClientProvider from "./store/client/ClientProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClientProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ClientProvider>
  </React.StrictMode>
);
