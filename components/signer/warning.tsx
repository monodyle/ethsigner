interface Props {
  message: string;
  onClose: () => void;
}

export const Warning = (props: Props) => (
  <div
    className="px-4 py-3 bg-orange-100 text-sm rounded cursor-pointer"
    onClick={() => props.onClose()}
  >
    {props.message}
  </div>
);
