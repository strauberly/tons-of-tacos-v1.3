import classes from "./cart.module.css";
import { GetCart } from "@/lib/cartFunctions";
import CartItem from "./cart-item";
import { useDisplayContext } from "@/context/display-context";
import { useCartContext } from "@/context/cart-context";
import { SetStateAction, useEffect, useRef, useState } from "react";

export default function Cart() {
  const { setShowCart } = useDisplayContext();
  const { cart, setCart } = useCartContext();

  // setCart(GetCart());
  // const [newCart, setNewCart] = useState<CartItem[]>([]);

  useEffect(() => {
    // cart.current = GetCart();
    setCart(GetCart());
  }, [setCart]);

  // setCart(GetCart());

  return (
    <div
      className={classes.cart}
      onMouseEnter={() => setShowCart(true)}
      onMouseLeave={() => setShowCart(false)}
    >
      <ul>
        {cart.map(
          (cartItem: {
            itemName: string;
            quantity: number;
            size: string;
            price: string;
          }) => (
            // make this be cart item name + a random
            <CartItem
              key={cartItem.itemName}
              itemName={cartItem.itemName}
              itemQuantity={cartItem.quantity}
              size={cartItem.size}
              itemPrice={cartItem.price}
            />
          )
        )}
      </ul>
      <p className={classes.total}>Total: ${}</p>
      <p>Submit order placeholder</p>
    </div>
  );
}
