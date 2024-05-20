"use client";
import classes from "./add-to-cart.module.css";
import { useCartContext } from "@/context/cart-context";
import { AddItemToCart, GetCart } from "@/lib/cartFunctions";
import { useEffect, useState } from "react";

export default function AddToCart(props: {
  itemName: string;
  quantity: number;
  size: string;
  price: string;
  quantitySelector: () => void;
  expander: () => void;
}) {
  const [largeOrder, setLargeOrder] = useState(false);

  const { cartQuantity, setCartQuantity, setItemsInCart } = useCartContext();

  let newQuantity = 0;

  const quantity = () => {
    newQuantity = cartQuantity + props.quantity;
    if (newQuantity > 20) {
      alert(
        "Your order has grown to a fair size. The current maximum is 20 items. Please contact us before adding anything else. This will ensure we can make your order happen today. You can also remove items from your cart. Thank you!"
      );
      setLargeOrder(true);
    } else {
      setCartQuantity(cartQuantity + props.quantity);
      // AddItemToCart(props.itemName, props.quantity, props.size, props.price);
    }
  };
  // useEffect(() => {
  //   setCart(GetCart())
  // })
  return (
    <button
      disabled={largeOrder === true ? true : false}
      className={classes.add}
      onClick={() => [
        quantity(),
        setItemsInCart(true),
        setLargeOrder(false),
        props.quantitySelector(),
        props.expander(),
        AddItemToCart(props.itemName, props.quantity, props.size, props.price),
        // setCart(GetCart()),
        // alert(cart.toString()),
      ]}
    >
      Add To Cart
    </button>
  );
}
