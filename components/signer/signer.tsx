import { ethers } from "ethers";
import { useState } from "react";
import { MessageInput } from "./input";
import { Signature } from "./signature";
import { Submit } from "../form/submit";
import { Warning } from "./warning";

export const Signer = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [warning, setWarning] = useState<string>();
  const [signature, setSignature] = useState<string>();

  const signMessage = async () => {
    setSignature(undefined);
    setWarning(undefined);

    setLoading(true);
    try {
      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const signature = await signer.signMessage(value);
      setSignature(signature);
    } catch (e) {
      if (typeof e === "object" && e && "code" in e) {
        if ((e as any).code === 4001) {
          setWarning("Sign message action has been denied.");
        }
      } else {
        console.error("signMessage error", e);
      }
    }
    setLoading(false);
  };

  return (
    <>
      <MessageInput value={value} setValue={setValue} />
      <Submit
        onClick={signMessage}
        loading={loading}
        label="Sign this message"
      />
      {warning && (
        <Warning message={warning} onClose={() => setWarning(undefined)} />
      )}
      {signature && <Signature signature={signature} />}
    </>
  );
};
