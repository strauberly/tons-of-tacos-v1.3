"use client";
import classes from "@/components/ui/buttons/add-to-cart.module.css";
import { useCartContext } from "@/context/cart-context";

export default function AddToCart(props: { quantity: number }) {
  const { cartQuantity, setCartQuantity } = useCartContext();

  const quantity = () => {
    setCartQuantity(cartQuantity + props.quantity);
  };

  return (
    <button className={classes.add} onClick={() => quantity()}>
      Add To Cart
    </button>
  );
}
