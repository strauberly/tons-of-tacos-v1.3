import classes from "@/components/ui/badges/cart-quantity.module.css";
import { GetCartQuantity } from "@/lib/cartFunctions";

export default function CartQuantity(props: { quantity: number }) {
  return <button className={classes.quantityBadge}>{props.quantity}</button>;
}
