"use client";
import { GetCart, RemoveCartItem } from "@/lib/cartFunctions";
import classes from "./remove-from-cart.module.css";
import { useCartContext } from "@/context/cart-context";
import { useEffect } from "react";

export default function Remove(props: {
  id: string;
  cartItemQuantity: number;
}) {
  const { setCart, cartQuantity, setCartQuantity } = useCartContext();
  // useEffect(() => {
  //   setCart(GetCart());
  // });

  return (
    <button
      className={classes.remove}
      onClick={() => [
        RemoveCartItem(props.id),
        setCartQuantity(cartQuantity - props.cartItemQuantity),
      ]}
    >
      Remove
    </button>
  );
}
