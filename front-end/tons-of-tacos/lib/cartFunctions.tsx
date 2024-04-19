export async function AddItemToCart(
  itemName: string,
  quantity: number,
  size: string,
  price: string
) {
  const cartItem: CartItem = {
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

export function UpdateCartItemQuantity() {}

export function RemoveCartItem() {}

export function CreateCart() {
  const cart: CartItem[] = [];
  if (
    typeof window !== "undefined" &&
    !sessionStorage.getItem("tons-of-tacos-cart")
  ) {
    sessionStorage.setItem("tons-of-tacos-cart", JSON.stringify(cart));
  }
}
