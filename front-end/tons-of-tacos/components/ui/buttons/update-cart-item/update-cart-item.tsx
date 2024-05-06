"use client";

import { useCartContext } from "@/context/cart-context";
import { GetCart, UpdateCartItemQuantity } from "@/lib/cartFunctions";
import { useEffect } from "react";

export default function Update(props: {
  cartItem: string;
  updatedItemQuantity: number;
  updatedItemPrice: string;
}) {
  const { cart, setCart, setCartQuantity } = useCartContext();

  const newCart = cart;

  let cartItemIndex = newCart.findIndex(
    (cartItem) => (cartItem.itemName = props.cartItem)
  );

  newCart[cartItemIndex].quantity = props.updatedItemQuantity;

  useEffect(() => {
    setCart(GetCart());
  });

  return (
    <button
      onClick={() => [
        UpdateCartItemQuantity(
          props.cartItem,
          props.updatedItemQuantity,
          props.updatedItemPrice
        ),
        setCartQuantity(GetCart().length),
      ]}
    >
      Update
    </button>
  );
}
