interface Props {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  id?: string;
  iconAfter?: React.ReactNode;
}

export const Input = (props: Props) => (
  <div className="relative">
    <input
      id={props.id}
      className={[
        "w-full resize-none border border-slate-200 rounded text-sm px-3 py-2",
        props.iconAfter ? "pr-10" : "",
      ].join(" ")}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
    />
    {props.iconAfter && (
      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        {props.iconAfter}
      </div>
    )}
  </div>
);
