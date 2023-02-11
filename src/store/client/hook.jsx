import { useContext } from "react";
import { ClientContext } from "../Context";

const useClientStore = () => {
  const [stateClient, dispatchClient] = useContext(ClientContext);
  return [stateClient, dispatchClient];
};

export { useClientStore };
