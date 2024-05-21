"use client";
import classes from "./add-to-cart.module.css";
import { useCartContext } from "@/context/cart-context";
import { AddItemToCart } from "@/lib/cartFunctions";
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
  const [itemInCart, setItemInCart] = useState(false);

  const { cartQuantity, setCartQuantity, setItemsInCart, cart } =
    useCartContext();

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
    }
  };

  useEffect(() => {
    cart.forEach((cartItem) => {
      props.itemName === cartItem.itemName && props.size === cartItem.size
        ? setItemInCart(true)
        : setItemInCart(false);
    });
  }, [cart, itemInCart, props.itemName, props.size]);

  return (
    <button
      disabled={largeOrder === true ? true : false}
      className={classes.add}
      onClick={() => {
        if (!itemInCart) {
          [
            quantity(),
            setItemsInCart(true),
            setLargeOrder(false),
            props.quantitySelector(),
            props.expander(),
            AddItemToCart(
              props.itemName,
              props.quantity,
              props.size,
              props.price
            ),
          ];
        } else {
          alert(
            `${props.itemName} is already in your cart. Select the cart icon to view your order and change quantities.`
          );
        }
      }}
    >
      Add To Cart
    </button>
  );
}
