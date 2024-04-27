import classes from "./cart.module.css";
import { GetCart } from "@/lib/cartFunctions";
import CartItem from "./cart-item";
import { useDisplayContext } from "@/context/display-context";

export default function Cart() {
  const cartItems = GetCart();
  const { setShowCart } = useDisplayContext();

  return (
    <div
      className={classes.cart}
      onMouseEnter={() => setShowCart(true)}
      onMouseLeave={() => setShowCart(false)}
    >
      <ul>
        {cartItems.map(
          (cartItem: {
            itemName: string;
            quantity: number;
            size: string;
            price: string;
          }) => (
            // make this be cart item name + a random
            <CartItem
              key={cartItem.itemName}
              itemName={cartItem.itemName}
              itemQuantity={cartItem.quantity}
              size={cartItem.size}
              itemPrice={cartItem.price}
            />
          )
        )}
      </ul>
      <p className={classes.total}>Total: ${}</p>
      <p>Submit order placeholder</p>
    </div>
  );
}
