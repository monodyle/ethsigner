import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import Web3 from "web3";
import { UserIcon } from "~components/icons/user";
import { useWalletConnect } from "~hooks/useWalletConnect";
import { Address } from "./address";
import { ConnectButton } from "./connect";

export const User = () => {
  const { connect, disconnect } = useWalletConnect();
  const { active, account, chainId } = useWeb3React();

  // Request change chain
  useEffect(() => {
    if (!chainId) return;
    (async () => {
      if (chainId !== 1) {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x1" }],
          });
        } catch (e) {
          console.error("Failed to switch chain", e);
        }
      }
    })();
  }, [chainId]);

  // Auto reconnect
  useEffect(() => {
    const checkConnection = async () => {
      let web3: any;
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
      } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
      }

      web3.eth.getAccounts().then(async (addr: string) => {
        if (addr) connect();
      });
    };
    checkConnection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-md bg-slate-100 text-slate-500 flex items-center justify-center">
        <UserIcon className="w-4 h-4" />
      </div>
      <div className="flex-1">
        <Address address={account} />
      </div>
      <ConnectButton
        active={active}
        connect={connect}
        disconnect={disconnect}
      />
    </div>
  );
};
