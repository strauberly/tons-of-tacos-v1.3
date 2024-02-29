import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ContextProps {
  cart: OrderItem[];
  setCart: Dispatch<SetStateAction<OrderItem[]>>;
}

const CartContext = createContext<ContextProps>({
  cart: [],
  setCart: (): OrderItem[] => [],
});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<[] | OrderItem[]>([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
