"use client";

import { ReactNode } from "react";
import { MenuCategoryContextProvider } from "./menu-category-context";
import { DisplayContextProvider } from "./display-context";
import { CartContextProvider } from "./cart-context";
import { MenuContextProvider } from "./menu-context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartContextProvider>
      <MenuCategoryContextProvider>
        <DisplayContextProvider>
          <MenuContextProvider>{children}</MenuContextProvider>
        </DisplayContextProvider>
      </MenuCategoryContextProvider>
    </CartContextProvider>
  );
}
