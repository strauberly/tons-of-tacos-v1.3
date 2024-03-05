import { GetCart } from "@/lib/cartFunctions";
import classes from "@/components/ui/badges/cart-quantity.module.css";

export default function CartQuantity() {
  let cartQuantity: number = 0;

  const cartQuantities: number[] = GetCart().map(
    (cartItem) => cartItem.quantity
  );

  cartQuantities.forEach((quantity) => {
    cartQuantity += quantity;
  });

  return <button className={classes.quantityBadge}>{cartQuantity}</button>;
}
