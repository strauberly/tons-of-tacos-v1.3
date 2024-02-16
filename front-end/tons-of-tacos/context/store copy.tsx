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
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  menuItems: MenuItem[];
  setMenuItems: Dispatch<SetStateAction<MenuItem[]>>;
}

const ChildrenContext = createContext<ContextProps>({
  showMenu: false,
  setShowMenu: () => {},
  categories: [],
  setCategories: (): Category[] => [],
  isLoading: false,
  setIsLoading: () => {},
  menuItems: [],
  setMenuItems: (): MenuItem[] => [],
});

export const ChildrenContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [categories, setCategories] = useState<[] | Category[]>([]);
  const [menuItems, setMenuItems] = useState<[] | MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ChildrenContext.Provider
      value={{
        showMenu,
        setShowMenu,
        categories,
        setCategories,
        isLoading,
        setIsLoading,
        menuItems,
        setMenuItems,
      }}
    >
      {children}
    </ChildrenContext.Provider>
  );
};

export const useChildrenContext = () => useContext(ChildrenContext);
