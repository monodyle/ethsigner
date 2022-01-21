import { Field } from "~components/form/field";
import { Textarea } from "~components/form/textarea";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const MessageInput = (props: Props) => (
  <Field className="mb-4" label="Message" htmlFor="signInput">
    <Textarea
      id="signInput"
      className="h-32"
      placeholder="Enter message here..."
      value={props.value}
      setValue={props.setValue}
    />
  </Field>
);
