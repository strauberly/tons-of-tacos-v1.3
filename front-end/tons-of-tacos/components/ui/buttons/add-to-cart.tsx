"use client";
import classes from "@/components/ui/buttons/add-to-cart.module.css";
import { useCartContext } from "@/context/cart-context";

export default function AddToCart(props: { quantity: number }) {
  const { cartQuantity, setCartQuantity, setItemsInCart } = useCartContext();

  const quantity = () => {
    setCartQuantity(cartQuantity + props.quantity);
  };
  // on click items in cart true
  return (
    <button
      className={classes.add}
      onClick={() => [quantity(), setItemsInCart(true)]}
    >
      Add To Cart
    </button>
  );
}
