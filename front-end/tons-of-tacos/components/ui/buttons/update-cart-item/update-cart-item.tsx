"use client";

import { useCartContext } from "@/context/cart-context";

import { GetCart, GetCartQuantity, UpdateCart } from "@/lib/cartFunctions";

import { useEffect } from "react";
import CartQuantityChange from "../../animations/cart-quantity-change";

export default function Update(props: {
  cartItem: string;
  updatedItemQuantity: number;
  updatedItemPrice: string;
  oldQuantity: number;
}) {
  const {
    cart,
    setCart,
    setCartQuantity,
    cartQuantity,
    setItemQuantityChanged,
    itemQuantityChanged,
  } = useCartContext();

  const newCart = cart;

  const updateCartItem = () => {
    let cartItemIndex = newCart.findIndex(
      (cartItem) => cartItem.itemName === props.cartItem
    );

    newCart[cartItemIndex].quantity = props.updatedItemQuantity;

    newCart[cartItemIndex].price = props.updatedItemPrice;
    setCart(newCart);
    UpdateCart(newCart);
  };

  // set cart with new cart
  // update cart function, wipe old cart write new cart >> pass cart context

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

  const updateQuantity = () => {
    newQuantity = cartQuantity - props.oldQuantity;
    newQuantity += props.updatedItemQuantity;
    // if (newQuantity > 15) {
    //   alert(
    //     "Your order has grown to a fair size. The current maximum is 15 items. Please contact us before adding anything else. This will ensure we can make your order happen today. You can also remove items from your cart. Thank you!"
    //   );
    //   setLargeOrder(true);
    // } else {
    setCartQuantity(newQuantity);
  };

  // useEffect(() => {
  //   setCart(newCart);
  //   setCartQuantity(GetCart().length);
  // }, [newCart, setCart, setCartQuantity]);

  useEffect(() => {
    if (props.oldQuantity != props.updatedItemQuantity) {
      setItemQuantityChanged(true);
    }
  }, [props.oldQuantity, props.updatedItemQuantity, setItemQuantityChanged]);

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
