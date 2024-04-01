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
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  menuNavCategories: Category[];
  setMenuNavCategories: Dispatch<SetStateAction<Category[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  menuItems: MenuItem[];
  setMenuItems: Dispatch<SetStateAction<MenuItem[]>>;
}

const NavContext = createContext<ContextProps>({
  showMenu: false,
  setShowMenu: () => {},
  menuNavCategories: [],
  setMenuNavCategories: (): Category[] => [],
  isLoading: false,
  setIsLoading: () => {},
  menuItems: [],
  setMenuItems: (): MenuItem[] => [],
});

export const NavContextProvider = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [categories, setMenuNavCategories] = useState<[] | Category[]>([]);
  const [menuItems, setMenuItems] = useState<[] | MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <NavContext.Provider
      value={{
        showMenu,
        setShowMenu,
        menuNavCategories: categories,
        setMenuNavCategories: setMenuNavCategories,
        isLoading,
        setIsLoading,
        menuItems,
        setMenuItems,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => useContext(NavContext);
