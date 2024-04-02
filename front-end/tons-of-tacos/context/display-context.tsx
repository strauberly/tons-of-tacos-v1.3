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
}

const DisplayContext = createContext<ContextProps>({
  showMenu: false,
  setShowMenu: () => {},
});

export const DisplayContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <DisplayContext.Provider
      value={{
        showMenu,
        setShowMenu,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
};

export const useDisplayContext = () => useContext(DisplayContext);
