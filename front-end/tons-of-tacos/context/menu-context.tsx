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
  categories: Category[];
  setCategories: Dispatch<SetStateAction<Category[]>>;
  menuItems: MenuItem[];
  setMenuItems: Dispatch<SetStateAction<MenuItem[]>>;
}

const MenuContext = createContext<ContextProps>({
  categories: [],
  setCategories: (): Category[] => [],
  menuItems: [],
  setMenuItems: (): MenuItem[] => [],
});

export const MenuContextProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<[] | Category[]>([]);
  const [menuItems, setMenuItems] = useState<[] | MenuItem[]>([]);

  return (
    <MenuContext.Provider
      value={{
        categories,
        setCategories,
        menuItems,
        setMenuItems,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);
