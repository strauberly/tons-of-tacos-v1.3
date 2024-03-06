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
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
  cartQuantity: number;
  setCartQuantity: Dispatch<SetStateAction<number>>;
}

const CartContext = createContext<ContextProps>({
  cart: [],
  setCart: (): CartItem[] => [],
  cartQuantity: 0,
  setCartQuantity: () => {},
});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<[] | CartItem[]>([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cartQuantity,
        setCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
