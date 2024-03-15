"use client";
import classes from "./add-to-cart.module.css";
import { useCartContext } from "@/context/cart-context";
import { AddItemToCart } from "@/lib/cartFunctions";
import { useState } from "react";

export default function AddToCart(props: {
  itemName: string;
  quantity: number;
  size: string;
  price: string;
}) {
  const [largeOrder, setLargeOrder] = useState(false);

  const { cartQuantity, setCartQuantity, setItemsInCart } = useCartContext();

  let newQuantity = 0;

  const quantity = () => {
    newQuantity = cartQuantity + props.quantity;
    if (newQuantity > 15) {
      alert(
        "Your order has grown to a fair size. Please contact us before adding anything else to your order to ensure we can make that happen today or remove items from your cart. Thank you."
      );
      setLargeOrder(true);
    } else {
      setCartQuantity(cartQuantity + props.quantity);
      AddItemToCart(props.itemName, props.quantity, props.size, props.price);
    }
  };

  return (
    <button
      disabled={largeOrder === true ? true : false}
      className={classes.add}
      onClick={() => [quantity(), setItemsInCart(true), setLargeOrder(false)]}
    >
      Add To Cart
    </button>
  );
}
