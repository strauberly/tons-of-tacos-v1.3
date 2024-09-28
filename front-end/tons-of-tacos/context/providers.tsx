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
      <CartContextProvider>
        <MenuCategoryContextProvider>
          <DisplayContextProvider>
            <MenuContextProvider>{children}</MenuContextProvider>
          </DisplayContextProvider>
        </MenuCategoryContextProvider>
      </CartContextProvider>
    </AlertContextProvider>
  );
}
