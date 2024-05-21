"use client";

import { useCartContext } from "@/context/cart-context";

import { UpdateCart } from "@/lib/cartFunctions";

import { useEffect, useState } from "react";

export default function Update(props: {
  cartItem: string;
  updatedItemQuantity: number;
  updatedItemPrice: string;
  oldQuantity: number;
}) {
  const { cart, setCart, setCartQuantity, cartQuantity } = useCartContext();

  const newCart = cart;

  const [itemQuantityChanged, setItemQuantityChanged] = useState(false);

  const updateCartItem = () => {
    let cartItemIndex = newCart.findIndex(
      (cartItem) => cartItem.itemName === props.cartItem
    );

    newCart[cartItemIndex].quantity = props.updatedItemQuantity;

    newCart[cartItemIndex].price = props.updatedItemPrice;
    setCart(newCart);
    UpdateCart(newCart);
  };

  let newQuantity = 0;

  const updateQuantity = () => {
    newQuantity = cartQuantity - props.oldQuantity;
    newQuantity += props.updatedItemQuantity;
    if (newQuantity > 20) {
      alert(
        "Your order has grown to a fair size. The current maximum is 20 items. Please contact us before adding anything else. This will ensure we can make your order happen today. You can also remove items from your cart. Thank you!"
      );
    } else {
      setCartQuantity(newQuantity);
    }
  };

  useEffect(() => {
    if (props.oldQuantity != props.updatedItemQuantity) {
      setItemQuantityChanged(true);
    }
  }, [props.oldQuantity, props.updatedItemQuantity]);

  return (
    <div>
      {itemQuantityChanged && (
        <button
          onClick={() => [
            updateCartItem(),
            updateQuantity(),
            setItemQuantityChanged(false),
          ]}
        >
          Update
        </button>
      )}
    </div>
  );
}
