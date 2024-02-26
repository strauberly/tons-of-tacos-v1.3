"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";

interface ContextProps {
  sizeSelected: string;
  setSizeSelected: Dispatch<SetStateAction<string>>;
}

const MenuItemContext = createContext<ContextProps>({
  sizeSelected: "",
  setSizeSelected: (): string => "",
});

export const MenuItemContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [sizeSelected, setSizeSelected] = useState("");

  return (
    <MenuItemContext.Provider
      value={{
        sizeSelected,
        setSizeSelected,
      }}
    >
      {children}
    </MenuItemContext.Provider>
  );
};

export const useMenuItemContext = () => useContext(MenuItemContext);
