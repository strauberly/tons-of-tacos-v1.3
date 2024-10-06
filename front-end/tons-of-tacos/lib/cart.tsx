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
  menuId: string,
  itemName: string,
  quantity: number,
  size: string,
  price: string
) {
  const cartItem: CartItem = {
    id: id,
    menuId: menuId,
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

export type responseMessage = { message: "" };

export let resp: string = "";

export async function SendOrder(
  previousState: responseMessage,
  formData: FormData
) {
  let firstName = formData.get("first_name");
  let lastName = formData.get("last_name");
  let phone = formData.get("phone");
  let email = formData.get("email");

  type item = {
    menuId: string;
    quantity: number;
    size: string;
  };

  let cartItems = GetCart();

  let orderItems: item[] = cartItems.map((i) => {
    return {
      menuId: i.menuId,
      quantity: i.quantity,
      size: i.size.charAt(0),
    };
  });

  const order = {
    customer: {
      name: firstName + " " + lastName,
      phoneNumber: phone,
      email: email,
    },
    order: orderItems,
  };

  const response = await fetch("http://localhost:8080/api/order/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

  const data = await response.json();
  const status = response.status;

  // console.log(JSON.stringify(data));

  const orderNumber = data.orderUid;
  const customerName = data.customerName;
  const customerEmail = data.customerEmail;
  const customerPhone = data.customerPhone;
  const orderTotal = data.orderTotal;

  let receivedOrderItems: string[] = data.orderItems.map(
    (orderItem: OrderItem) =>
      `\n${orderItem.quantity}  x  ${orderItem.itemName}:
      size  (${orderItem.size})  =  $${orderItem.total.toFixed(2)}`
  );

  const orderConfirmation = `Hola, ${customerName}!

Thank you for your order of: 
${receivedOrderItems}

$${orderTotal.toFixed(
    2
  )} is your total and we accept cash, credit, debit, and crypto.
   
Your confirmation is ${orderNumber}  and your food should be ready in about 15 minutes.
   
We'll try to contact you to let you know your order is ready at ${customerPhone} and ${customerEmail}.
  
See you at the truck!`;

  if (status === 201) {
    return { message: orderConfirmation };
  } else {
    return { message: data.message };
  }
}
