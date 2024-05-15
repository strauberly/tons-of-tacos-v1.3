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
  itemQuantityChanged: boolean;
  setItemQuantityChanged: Dispatch<SetStateAction<boolean>>;
}

const CartContext = createContext<ContextProps>({
  cart: [],
  setCart: (): CartItem[] => [],
  cartQuantity: 0,
  setCartQuantity: () => {},
  itemsInCart: false,
  setItemsInCart: () => {},
  itemQuantityChanged: false,
  setItemQuantityChanged: () => {},
});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<[] | CartItem[]>([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [itemsInCart, setItemsInCart] = useState(false);
  const [itemQuantityChanged, setItemQuantityChanged] = useState(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cartQuantity,
        setCartQuantity,
        itemsInCart,
        setItemsInCart,
        itemQuantityChanged,
        setItemQuantityChanged,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
