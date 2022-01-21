interface Props {
  value: string;
  setValue: (value: string) => void;
  className?: string;
  placeholder?: string;
  id?: string;
}

export const Textarea = (props: Props) => (
  <textarea
    id={props.id}
    className={[
      "w-full resize-none border border-slate-200 rounded text-sm px-3 py-2",
      props.className || "",
    ].join(" ")}
    placeholder={props.placeholder}
    value={props.value}
    onChange={(e) => props.setValue(e.target.value)}
  />
);
