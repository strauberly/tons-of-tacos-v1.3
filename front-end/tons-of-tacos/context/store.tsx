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
  categories: Category[];
  setCategories: Dispatch<SetStateAction<Category[]>>;
}

const GlobalContext = createContext<ContextProps>({
  showMenu: false,
  setShowMenu: () => {},
  categories: [],
  setCategories: (): Category[] => [],
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [categories, setCategories] = useState<[] | Category[]>([]);

  return (
    <GlobalContext.Provider
      value={{ showMenu, setShowMenu, categories, setCategories }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
