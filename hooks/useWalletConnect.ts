import { useWeb3React } from "@web3-react/core";
import { injected } from "~utils/connector";

export const useWalletConnect = () => {
  const { activate, deactivate } = useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (e) {
      console.error("connect error", e);
    }
  };

  const disconnect = () => {
    try {
      deactivate();
    } catch (e) {
      console.error("disconnect error", e);
    }
  };

  return { connect, disconnect };
};
