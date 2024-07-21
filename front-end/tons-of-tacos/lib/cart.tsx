import cartItem from "@/components/cart/cart-item";

export function CreateCart() {
  const cart: CartItem[] = [];
  if (
    typeof window !== "undefined" &&
    !sessionStorage.getItem("tons-of-tacos-cart")
  ) {
    sessionStorage.setItem("tons-of-tacos-cart", JSON.stringify(cart));
  }
}

export async function AddItemToCart(
  id: string,
  itemName: string,
  quantity: number,
  size: string,
  price: string
) {
  const cartItem: CartItem = {
    id: id,
    itemName: itemName,
    quantity: quantity,
    size: size,
    price: price,
  };

  let newCart: CartItem[] = [];
  newCart = await GetCart();
  newCart.push(cartItem);
  sessionStorage.removeItem("tons-of-tacos-cart");
  sessionStorage.setItem("tons-of-tacos-cart", JSON.stringify(newCart));
}

export function RemoveCartItem(id: string) {
  const updatedCart = GetCart().filter((cartItem) => cartItem.id != id);
  sessionStorage.removeItem("tons-of-tacos-cart");
  sessionStorage.setItem("tons-of-tacos-cart", JSON.stringify(updatedCart));
}

export function GetCart() {
  let oldCart: CartItem[] = [];
  if (typeof window !== "undefined") {
    oldCart = JSON.parse(sessionStorage.getItem("tons-of-tacos-cart") || "{}");
  }
  return oldCart;
}

export async function GetCartQuantity() {
  const cart: CartItem[] = await GetCart();
  let cartQuantity: number[] = [];
  let quantity: number = 0;
  cartQuantity = cart.map((cartItem) => cartItem.quantity);
  cartQuantity.forEach((num) => (quantity += num));
  return quantity;
}

export function UpdateCart(cart: CartItem[]) {
  sessionStorage.removeItem("tons-of-tacos-cart");
  sessionStorage.setItem("tons-of-tacos-cart", JSON.stringify(cart));
}

export function SendOrder(formData: any) {
  // get customer info and food order and combine into required object for backend
  let firstName = formData.firstName;
  alert({ firstName });
}
