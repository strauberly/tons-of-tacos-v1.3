"use client";

import { GetCart, RemoveCartItem } from "@/lib/cartFunctions";
import classes from "./remove-from-cart.module.css";
import { useCartContext } from "@/context/cart-context";

// use function here to call library function and the call function on click

export default function Remove(props: {
  cartItem: string;
  cartItemQuantity: number;
}) {
  // async function remove() {
  //   RemoveCartItem();
  //   console.log("hi");

  // }
  const { setCart, cartQuantity, setCartQuantity } = useCartContext();
  const cartItem = props.cartItem;

  // const cart = RemoveCartItem(cartItem);
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
