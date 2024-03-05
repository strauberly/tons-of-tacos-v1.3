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
  const newCart: CartItem[] = GetCart();
  console.log(JSON.stringify(newCart));
  newCart.push(cartItem);
  console.log(JSON.stringify(newCart));

  sessionStorage.removeItem("TonsOfTacosCart");
  sessionStorage.setItem("TonsOfTacosCart", JSON.stringify(newCart));
}

export function GetCart() {
  const oldCart: CartItem[] = JSON.parse(
    sessionStorage.getItem("TonsOfTacosCart") || "{}"
  );
  return oldCart;
}

export function UpdateCartItemQuantity() {}

export function RemoveCartItem() {}

export function CreateCart() {
  const cart: CartItem[] = [];
  if (
    typeof window !== "undefined" &&
    !sessionStorage.getItem("TonsOfTacosCart")
  ) {
    sessionStorage.setItem("TonsOfTacosCart", JSON.stringify(cart));
  }
}
