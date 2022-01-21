interface Props {
  className?: string;
  label: string;
  htmlFor?: string;
}

export const Field: React.FC<Props> = (props) => (
  <div className={props.className}>
    <label
      htmlFor={props.htmlFor}
      className="block px-2 uppercase text-xs font-semibold text-slate-400 mb-1"
    >
      {props.label}
    </label>
    {props.children}
  </div>
);
