import { useWeb3React } from "@web3-react/core";
import { Field } from "~components/form/field";
import { Input } from "~components/form/input";
import { Textarea } from "~components/form/textarea";
import { InboxInIcon } from "~components/icons/inbox-in";
import { VerifyPayload } from "./verify";

interface Props {
  payload: VerifyPayload;
  updatePayload: (key: keyof VerifyPayload, value: string) => void;
}

export const VerifyForm = (props: Props) => {
  const { active, account } = useWeb3React();
  const pasteCurrentAddress = () => {
    if (!account) return;
    props.updatePayload("signer", account);
  };

  return (
    <>
      <Field className="mb-3" label="Signer" htmlFor="verifySigner">
        <Input
          id="verifySigner"
          placeholder="Signer address"
          value={props.payload.signer}
          iconAfter={
            active && (
              <button
                className="cursor-pointer text-slate-400"
                onClick={() => pasteCurrentAddress()}
                title="Import your address"
              >
                <InboxInIcon className="w-4 h-4" />
              </button>
            )
          }
          setValue={(value) => props.updatePayload("signer", value)}
        />
      </Field>
      <Field className="mb-3" label="Message" htmlFor="verifyMessage">
        <Textarea
          id="verifyMessage"
          placeholder="Message..."
          value={props.payload.message}
          setValue={(value) => props.updatePayload("message", value)}
        />
      </Field>
      <Field className="mb-4" label="Signature" htmlFor="verifySignature">
        <Textarea
          id="verifySignature"
          placeholder="Signature..."
          value={props.payload.signature}
          setValue={(value) => props.updatePayload("signature", value)}
        />
      </Field>
    </>
  );
};
