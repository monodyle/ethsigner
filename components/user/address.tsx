import { useCopy } from "~hooks/useCopy";

interface Props {
  address?: string | null;
}

const truncate = (address: string) =>
  address.substring(0, 8) + "..." + address.substr(38, address.length);

export const Address = (props: Props) => {
  const [copy, copied] = useCopy();

  if (!props.address)
    return (
      <span className="font-medium text-xs flex gap-1 text-slate-500">
        Not connected
      </span>
    );

  return (
    <>
      <span
        className="cursor-pointer font-medium text-sm flex gap-1"
        onClick={() => copy(props.address!)}
      >
        {truncate(props.address)}
        {copied && (
          <span className="text-xs bg-slate-400 rounded px-1 text-white flex items-center">
            Copied
          </span>
        )}
      </span>
      <span className="text-xs text-lime-500 -mt-1 block">Connected</span>
    </>
  );
};
