"use client";

import { useRef, useCallback, type ReactNode } from "react";
import { CopyButton } from "./copy-button";

interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  children?: ReactNode;
}

export function Pre({ children, ...props }: PreProps) {
  const preRef = useRef<HTMLPreElement>(null);

  const getCode = useCallback(() => {
    return preRef.current?.querySelector("code")?.innerText ?? "";
  }, []);

  return (
    <pre ref={preRef} {...props}>
      <CopyButton getCode={getCode} />
      {children}
    </pre>
  );
}
