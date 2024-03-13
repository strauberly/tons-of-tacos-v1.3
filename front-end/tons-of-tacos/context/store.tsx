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
  menuEntered: boolean;
  setMenuEntered: Dispatch<SetStateAction<boolean>>;
  menuIconEntered: boolean;
  setMenuIconEntered: Dispatch<SetStateAction<boolean>>;
  menuNavCategories: Category[];
  setMenuNavCategories: Dispatch<SetStateAction<Category[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  menuItems: MenuItem[];
  setMenuItems: Dispatch<SetStateAction<MenuItem[]>>;
}

const GlobalContext = createContext<ContextProps>({
  showMenu: false,
  setShowMenu: () => {},
  menuEntered: false,
  setMenuEntered: () => {},
  menuIconEntered: false,
  setMenuIconEntered: () => {},
  menuNavCategories: [],
  setMenuNavCategories: (): Category[] => [],
  isLoading: false,
  setIsLoading: () => {},
  menuItems: [],
  setMenuItems: (): MenuItem[] => [],
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [categories, setMenuNavCategories] = useState<[] | Category[]>([]);
  const [menuItems, setMenuItems] = useState<[] | MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [menuEntered, setMenuEntered] = useState(false);
  const [menuIconEntered, setMenuIconEntered] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        showMenu,
        setShowMenu,
        menuEntered,
        setMenuEntered,
        menuIconEntered,
        setMenuIconEntered,
        menuNavCategories: categories,
        setMenuNavCategories: setMenuNavCategories,
        isLoading,
        setIsLoading,
        menuItems,
        setMenuItems,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
