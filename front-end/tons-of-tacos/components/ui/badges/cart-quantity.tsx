// "use client";

import classes from "@/components/ui/badges/cart-quantity.module.css";
import { useCartContext } from "@/context/cart-context";
import { CreateCart, GetCartQuantity } from "@/lib/cartFunctions";
import { useEffect } from "react";

export default function CartQuantity() {
  const { setItemsInCart, setCartQuantity, cartQuantity } = useCartContext();

  const quantity = GetCartQuantity();
  // useEffect(() => {
  //   CreateCart();
  //   if (cartQuantity > 0) {
  //     setItemsInCart(true);
  //   }
  //   async function Quantity() {
  //     let quantity: number = 0;
  //     const cartItems: CartItem[] = JSON.parse(
  //       sessionStorage.getItem("tons-of-tacos-cart") || "{}"
  //     );

  //     const cartQuantity: number[] = cartItems.map(
  //       (cartItem) => cartItem.quantity
  //     );

  //     cartQuantity.forEach((num) => (quantity += num));
  //     setCartQuantity(quantity);
  //   }
  //   Quantity();
  // }, [cartQuantity, setCartQuantity, setItemsInCart]);
  useEffect(() => {
    CreateCart();
    if (cartQuantity > 0) {
      setItemsInCart(true);
    }
    setCartQuantity(quantity);
  }, [cartQuantity, quantity, setCartQuantity, setItemsInCart]);

  return <button className={classes.quantityBadge}>{cartQuantity}</button>;
}
