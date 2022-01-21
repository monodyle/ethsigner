interface Props {
  isValid: boolean;
}

export const Result = (props: Props) => (
  <div
    className={[
      "px-4 py-3 text-sm font-medium rounded",
      props.isValid ? "bg-lime-100" : "bg-red-100",
    ].join(" ")}
  >
    Signature is {props.isValid ? "valid" : "invalid"}!
  </div>
);
