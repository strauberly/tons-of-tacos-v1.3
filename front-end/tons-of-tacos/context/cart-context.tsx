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
  itemsInCart: boolean;
  setItemsInCart: Dispatch<SetStateAction<boolean>>;
}

const CartContext = createContext<ContextProps>({
  cart: [],
  setCart: (): CartItem[] => [],
  cartQuantity: 0,
  setCartQuantity: () => {},
  itemsInCart: false,
  setItemsInCart: () => {},
});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<[] | CartItem[]>([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [itemsInCart, setItemsInCart] = useState(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cartQuantity,
        setCartQuantity,
        itemsInCart,
        setItemsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
