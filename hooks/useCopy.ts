import { useState } from "react";
import copy from "copy-to-clipboard";

export const useCopy = (): [(value: string) => void, boolean] => {
  const [copied, setCopied] = useState(false);
  const [timeoutCopy, setTimeoutCopy] = useState<NodeJS.Timeout | undefined>(
    undefined
  );

  const handleCopy = (value: string) => {
    copy(value);
    setCopied(true);
    if (timeoutCopy) clearTimeout(timeoutCopy);
    setTimeoutCopy(setTimeout(() => setCopied(false), 3000));
  };

  return [handleCopy, copied];
};
