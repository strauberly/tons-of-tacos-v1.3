import { GetCart } from "@/lib/cartFunctions";
import CartItem from "./cart-item";

export default function Cart() {
  const cartItems = GetCart();

  return (
    <>
      <p>Cart placeholder</p>
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
    </>
  );
}
