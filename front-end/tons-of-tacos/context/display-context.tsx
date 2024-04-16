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
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

const DisplayContext = createContext<ContextProps>({
  showMenu: false,
  setShowMenu: () => {},
  showCart: false,
  setShowCart: () => {},
});

export const DisplayContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <DisplayContext.Provider
      value={{
        showMenu,
        setShowMenu,
        showCart,
        setShowCart,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
};

export const useDisplayContext = () => useContext(DisplayContext);
