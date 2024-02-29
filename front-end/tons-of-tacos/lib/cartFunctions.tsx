export function AddItemToCart(
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

  let cart: CartItem[] = [];

  if (sessionStorage.getItem("TonsOfTacosCart")) {
    cart = JSON.parse(sessionStorage.getItem("TonsOfTacosCart") || "{}");
  }

  cart.push(cartItem);
  console.log(cart);
}

export function GetCart() {}

export function UpdateCartItemQuantity() {}

export function RemoveCartItem() {}

export function CreateCart() {
  if (
    typeof window !== "undefined" &&
    !sessionStorage.getItem("TonsOfTacosCart")
  ) {
    sessionStorage.setItem("TonsOfTacosCart", JSON.stringify({}));
  }
}
