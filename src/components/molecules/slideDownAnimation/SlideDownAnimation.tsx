import { ReactNode } from "react";

export function SlideDownAnimation({ children }: { children: ReactNode }) {
  return (
    <div className="animate__animated animate__slideInDown">{children}</div>
  );
}
