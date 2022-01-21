import { LoginIcon } from "~components/icons/login";
import { LogoutIcon } from "~components/icons/logout";

interface Props {
  active: boolean;
  connect: () => void;
  disconnect: () => void;
}

export const ConnectButton = (props: Props) => (
  <button
    className="text-slate-400"
    onClick={() => (props.active ? props.disconnect() : props.connect())}
    title={props.active ? "Disconnect" : "Connect"}
  >
    {props.active ? (
      <LogoutIcon className="w-4 h-4" />
    ) : (
      <LoginIcon className="w-4 h-4" />
    )}
  </button>
);
