"use client";
import classes from "./add-to-cart.module.css";
import { useCartContext } from "@/context/cart-context";
import { AddItemToCart, GetCart } from "@/lib/cartFunctions";
import { useCallback, useEffect, useState } from "react";

export default function AddToCart(props: {
  id: string;
  itemName: string;
  quantity: number;
  size: string;
  price: string;
  quantitySelector: () => void;
  expander: () => void;
}) {
  const [largeOrder, setLargeOrder] = useState(false);
  const [itemInCart, setItemInCart] = useState(false);

  const {
    cartQuantity,
    setCartQuantity,
    setItemsInCart,
    cart,
    setCart,
    itemRemoved,
    setItemRemoved,
  } = useCartContext();

  let newQuantity = 0;

  const quantity = () => {
    newQuantity = cartQuantity + props.quantity;
    if (newQuantity > 30) {
      alert(
        "Your order has grown to a fair size. The current maximum is 30 items. Please contact us before adding anything else. This will ensure we can make your order happen today. You can also remove items from your cart. Thank you!"
      );
      setLargeOrder(true);
    } else {
      setCartQuantity(cartQuantity + props.quantity);
    }
  };

  const checkItem = useCallback(() => {
    cart.forEach((cartItem) => {
      if (props.id == cartItem.id) {
        setItemInCart(true);
      }
    });
  }, [cart, props.id]);

  const checkCartItem = () => {
    checkItem();
    if (itemInCart === false) {
      quantity();
      setItemsInCart(true);
      setLargeOrder(false);
      props.quantitySelector();
      props.expander();
      AddItemToCart(
        props.id,
        props.itemName,
        props.quantity,
        props.size,
        props.price
      );
      setCart(GetCart());
    } else {
      alert(
        `${props.itemName} is already in your cart. Select the cart icon to view your order and change quantities.`
      );
    }
  };

  useEffect(() => {
    checkItem();
    if (itemRemoved && itemInCart === true) {
      setItemInCart(false);
      setItemRemoved(false);
    }
  }, [checkItem, itemInCart, itemRemoved, setItemRemoved]);

  return (
    <>
      <p>{`${itemRemoved}`}</p>
      <p>{`${itemInCart}`}</p>
      <button
        disabled={largeOrder === true ? true : false}
        className={classes.add}
        onClick={() => {
          checkCartItem();
        }}
      >
        Add To Cart
      </button>
    </>
  );
}
