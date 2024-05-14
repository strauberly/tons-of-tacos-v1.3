"use client";

import { useCartContext } from "@/context/cart-context";
import {
  GetCart,
  GetCartQuantity,
  UpdateCartItem,
  // updateCartItem,
} from "@/lib/cartFunctions";
import { useEffect } from "react";

export default function Update(props: {
  cartItem: string;
  updatedItemQuantity: number;
  updatedItemPrice: string;
  oldQuantity: number;
}) {
  const { cart, setCart, setCartQuantity, cartQuantity } = useCartContext();

  const newCart = cart;

  // let cartItemIndex = newCart.findIndex((cartItem) => {
  //   return (cartItem.itemName = props.cartItem);
  // });

  // newCart[cartItemIndex].quantity = props.updatedItemQuantity;

  // useEffect(() => {
  //   async function updateQuantity() {
  //     setCartQuantity(await GetCartQuantity());
  //   }
  //   updateQuantity();
  // }, [setCartQuantity]);

  let newQuantity = 0;

  // const updateQuantity = () => {
  //   newQuantity = cartQuantity - props.oldQuantity;
  //   newQuantity += props.updatedItemQuantity;
  // if (newQuantity > 15) {
  //   alert(
  //     "Your order has grown to a fair size. The current maximum is 15 items. Please contact us before adding anything else. This will ensure we can make your order happen today. You can also remove items from your cart. Thank you!"
  //   );
  //   setLargeOrder(true);
  // } else {
  // setCartQuantity(newQuantity);

  // useEffect(() => {
  //   setCart(newCart);
  //   setCartQuantity(GetCart().length);
  // }, [newCart, setCart, setCartQuantity]);

  return (
    <button
      onClick={() => [
        UpdateCartItem(
          props.cartItem,
          props.updatedItemQuantity,
          props.updatedItemPrice
        ),
        setCart(GetCart()),
        setCartQuantity(cart.length),
      ]}
    >
      Update
    </button>
  );
}
