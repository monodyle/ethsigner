interface Props extends Omit<React.ButtonHTMLAttributes<any>, "onClick"> {
  onClick?: React.MouseEventHandler<HTMLElement>;
  loading?: boolean;
  label: string;
}

export const Submit = (props: Props) => (
  <button
    className="w-full px-5 leading-9 text-sm font-semibold rounded-md bg-gradient-to-r from-blue-500 to-sky-500 hover:brightness-110 text-white disabled:opacity-75 mb-4"
    onClick={(e) => props.onClick?.(e)}
    disabled={props.loading}
  >
    {props.label}
  </button>
);
