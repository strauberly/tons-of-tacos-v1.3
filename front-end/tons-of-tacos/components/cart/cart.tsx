import classes from "./cart.module.css";
import { GetCart } from "@/lib/cartFunctions";
import CartItem from "./cart-item";
import { useDisplayContext } from "@/context/display-context";
import { useCartContext } from "@/context/cart-context";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { json } from "stream/consumers";

export default function Cart() {
  const { setShowCart } = useDisplayContext();
  const { cart, setCart, cartQuantity } = useCartContext();

  let total = 0;

  function calcTotal() {
    let i;
    for (i = 0; i < cart.length; i++) {
      total += parseFloat(cart[i].price);
    }
    return total;
  }

  useEffect(() => {
    setCart(GetCart());
  }, [setCart]);

  return (
    <div
      className={classes.cart}
      onMouseEnter={() => [setShowCart(true)]}
      onMouseLeave={() => setShowCart(false)}
    >
      <ul>
        {cart.map(
          (cartItem: {
            itemName: string;
            quantity: number;
            size: string;
            price: string;
          }) => (
            // make this be cart item name + a random
            <CartItem
              key={`${cartItem.itemName}_${cartItem.size}`}
              id={`${cartItem.itemName}_${cartItem.size}`}
              itemName={cartItem.itemName}
              itemQuantity={cartItem.quantity}
              size={cartItem.size}
              itemPrice={cartItem.price}
            />
          )
        )}
      </ul>

      <p className={classes.total}>Total: $ {calcTotal().toFixed(2)}</p>
      <p className={classes.checkout}>Submit order placeholder</p>
    </div>
  );
}
