"use client";
import { RemoveCartItem } from "@/lib/cartFunctions";
import classes from "./remove-from-cart.module.css";
import { useCartContext } from "@/context/cart-context";

export default function Remove(props: {
  id: string;
  cartItemQuantity: number;
}) {
  const { cartQuantity, setCartQuantity } = useCartContext();

  return (
    <button
      className={classes.remove}
      onClick={() => [
        RemoveCartItem(props.id),
        setCartQuantity(cartQuantity - props.cartItemQuantity),
      ]}
    >
      Remove
    </button>
  );
}
