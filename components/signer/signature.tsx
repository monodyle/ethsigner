import { useRef } from "react";
import { useCopy } from "~hooks/useCopy";

interface Props {
  signature: string;
}

export const Signature = (props: Props) => {
  const [copy, copied] = useCopy();
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    copy(props.signature);
    if (!ref || !ref.current) return;
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(ref.current);
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  return (
    <div className="relative rounded overflow-hidden">
      {copied && (
        <div className="bg-slate-200 bg-opacity-90 flex items-center justify-center font-semibold absolute top-0 left-0 w-full h-full pointer-events-none">
          Copied
        </div>
      )}
      <div
        ref={ref}
        className="px-4 py-3 break-words bg-slate-100 text-sm cursor-pointer"
        onClick={() => handleClick()}
      >
        {props.signature}
      </div>
    </div>
  );
};
