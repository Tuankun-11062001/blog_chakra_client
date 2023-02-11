import React from "react";
import { useReducer } from "react";
import { ClientContext } from "../Context";
import { clientInit } from "./clientInit";
import { clientReducer } from "./clientReducer";

export default function ClientProvider({ children }) {
  const [stateClient, dispatchClient] = useReducer(clientReducer, clientInit);
  return (
    <ClientContext.Provider value={[stateClient, dispatchClient]}>
      {children}
    </ClientContext.Provider>
  );
}
