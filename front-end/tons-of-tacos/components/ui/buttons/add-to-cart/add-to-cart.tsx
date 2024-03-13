"use client";
import classes from "./add-to-cart.module.css";
import { useCartContext } from "@/context/cart-context";
import { AddItemToCart } from "@/lib/cartFunctions";

export default function AddToCart(props: {
  itemName: string;
  quantity: number;
  size: string;
  price: string;
}) {
  const { cartQuantity, setCartQuantity, setItemsInCart } = useCartContext();

  const quantity = () => {
    setCartQuantity(cartQuantity + props.quantity);
  };
  // on click items in cart true
  return (
    <button
      className={classes.add}
      onClick={() => [
        quantity(),
        setItemsInCart(true),
        AddItemToCart(props.itemName, props.quantity, props.size, props.price),
      ]}
    >
      Add To Cart
    </button>
  );
}
