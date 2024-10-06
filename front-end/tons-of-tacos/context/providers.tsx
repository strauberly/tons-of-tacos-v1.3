"use client";

import { ReactNode } from "react";
import { MenuCategoryContextProvider } from "./menu-category-context";
import { DisplayContextProvider } from "./display-context";
import { CartContextProvider } from "./cart-context";
import { MenuContextProvider } from "./menu-context";
import { AlertContextProvider } from "./alert-context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AlertContextProvider>
      <DisplayContextProvider>
        <CartContextProvider>
          <MenuCategoryContextProvider>
            <MenuContextProvider>{children}</MenuContextProvider>
          </MenuCategoryContextProvider>
        </CartContextProvider>
      </DisplayContextProvider>
    </AlertContextProvider>
  );
}
