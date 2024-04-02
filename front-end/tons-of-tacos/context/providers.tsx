"use client";

import { ReactNode } from "react";
import { NavContextProvider } from "./nav-context";
import { DisplayContextProvider } from "./display-context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <NavContextProvider>
      <DisplayContextProvider>{children}</DisplayContextProvider>
    </NavContextProvider>
  );
}
