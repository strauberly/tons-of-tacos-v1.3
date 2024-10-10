import classes from "./cart.module.css";
import { GetCart } from "@/lib/cart";
import CartItem from "./cart-item";
import { useDisplayContext } from "@/context/display-context";
import { useCartContext } from "@/context/cart-context";
import { useEffect } from "react";
import CustomerInfoForm from "../ui/forms/customer-info-form";
import CartItems from "./cart-item-list";

export default function Cart() {
  const { setShowCart } = useDisplayContext();
  const { cart, setCart } = useCartContext();

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
    <>
      <div
        className={classes.cart}
        onMouseEnter={() => [setShowCart(true)]}
        onMouseLeave={() => setShowCart(false)}
      >
        <CartItems />
        <p className={classes.total}>Total: $ {calcTotal().toFixed(2)}</p>
        <CustomerInfoForm />
      </div>
    </>
  );
}
