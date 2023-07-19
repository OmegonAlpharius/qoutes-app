import { ReactNode } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: { children: ReactNode }) => {
  const portalRoot = document.body;
  return portalRoot ? createPortal(children, portalRoot) : null;
};

export default Portal;
