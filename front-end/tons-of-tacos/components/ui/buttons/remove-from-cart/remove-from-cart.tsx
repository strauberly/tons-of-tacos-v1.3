"use client";
import { GetCart, RemoveCartItem } from "@/lib/cartFunctions";
import classes from "./remove-from-cart.module.css";
import { useCartContext } from "@/context/cart-context";

export default function Remove(props: {
  cartItem: string;
  cartItemQuantity: number;
}) {
  const { setCart, cartQuantity, setCartQuantity } = useCartContext();
  const cartItem = props.cartItem;

  return (
    <button
      className={classes.remove}
      onClick={() => [
        RemoveCartItem(cartItem),
        setCart(GetCart()),
        setCartQuantity(cartQuantity - props.cartItemQuantity),
      ]}
    >
      Remove
    </button>
  );
}
