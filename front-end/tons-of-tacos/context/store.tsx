"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
  showMenu: false,
  setShowMenu: () => {},
});

export const GlobalContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <GlobalContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
