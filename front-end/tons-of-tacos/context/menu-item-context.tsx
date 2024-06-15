"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ContextProps {
  itemInCart: boolean;
  setItemInCart: Dispatch<SetStateAction<boolean>>;
}

const MenuItemContext = createContext<ContextProps>({
  itemInCart: false,
  setItemInCart: () => {},
});

export const MenuItemProvider = ({ children }: { children: ReactNode }) => {
  const [itemInCart, setItemInCart] = useState(false);

  return (
    <MenuItemContext.Provider
      value={{
        itemInCart,
        setItemInCart,
      }}
    >
      {children}
    </MenuItemContext.Provider>
  );
};

export const useMenuItemContext = () => useContext(MenuItemContext);
