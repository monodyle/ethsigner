import { ethers } from "ethers";
import { useState } from "react";
import { Submit } from "~components/form/submit";
import { VerifyForm } from "./form";
import { Result } from "./result";

export interface VerifyPayload {
  signer: string;
  message: string;
  signature: string;
}

export const Verify = () => {
  const [result, setResult] = useState<boolean>();
  const [payload, setPayload] = useState<VerifyPayload>({
    signer: "",
    message: "",
    signature: "",
  });
  const updatePayload = (key: keyof VerifyPayload, value: string) =>
    setPayload((o) => ({ ...o, [key]: value }));

  const verifySignature = () => {
    setResult(undefined);
    try {
      const recoveredAddress = ethers.utils.verifyMessage(
        payload.message,
        payload.signature
      );
      const isValid = recoveredAddress === payload.signer;
      setResult(isValid);
    } catch (e) {
      console.error("verifySignature error", e);
    }
  };

  return (
    <>
      <VerifyForm payload={payload} updatePayload={updatePayload} />
      <Submit onClick={verifySignature} label="Verify signature" />
      {result !== undefined && <Result isValid={result} />}
    </>
  );
};
