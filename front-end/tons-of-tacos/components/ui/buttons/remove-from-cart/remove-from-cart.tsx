"use client";

import { RemoveCartItem } from "@/lib/cartFunctions";
import classes from "./remove-from-cart.module.css";
import { useEffect } from "react";

// use function here to call library function and the call function on click

export default function Remove(props: { cartItem: string }) {
  // async function remove() {
  //   RemoveCartItem();
  //   console.log("hi");

  // }

  const cartItem = props.cartItem;

  // const cart = RemoveCartItem(cartItem);
  return (
    <button className={classes.remove} onClick={() => RemoveCartItem(cartItem)}>
      Remove
    </button>
  );
}
