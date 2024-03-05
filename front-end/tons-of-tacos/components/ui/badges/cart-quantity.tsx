import { GetCart } from "@/lib/cartFunctions";

export default function CartQuantity() {
  let cartQuantity: number = 0;

  const cartQuantities: number[] = GetCart().map(
    (cartItem) => cartItem.quantity
  );

  cartQuantities.forEach((quantity) => {
    cartQuantity += quantity;
  });

  return <button>{cartQuantity}</button>;
}
