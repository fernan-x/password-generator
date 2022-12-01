import { useState } from "react";

export default function useCopy(): [boolean, (value: string) => void] {
  const [isCopied, setIsCopied] = useState(false);

  const copyValue = (value: string) => {
    if (value.length > 0) {
      navigator.clipboard.writeText(value);
      setIsCopied(true);
      setInterval(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  return [isCopied, copyValue];
}
