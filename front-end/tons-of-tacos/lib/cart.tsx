import CartItem from "@/components/cart/cart-item";
import cartItem from "@/components/cart/cart-item";
import { FormEvent } from "react";
import { json } from "stream/consumers";

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

// export async function SendOrder(event: FormEvent<HTMLFormElement>) {
//   // get customer info and food order and combine into required object for backend
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   let firstName = formData.get("first_name");
//   let lastName = formData.get("last_name");
//   let phone = formData.get("phone");
//   let email = formData.get("email");

//   type item = {
//     menuId: string;
//     quantity: number;
//     size: string;
//   };

//   let cartItems = GetCart();

//   let orderItems: item[] = cartItems.map((i) => {
//     return {
//       menuId: i.menuId,
//       quantity: i.quantity,
//       size: i.size.charAt(0),
//     };
//   });

//   const order = {
//     customer: {
//       name: firstName + " " + lastName,
//       phoneNumber: phone,
//       email: email,
//     },
//     order: orderItems,
//   };

//   const response = await fetch("http://localhost:8080/api/order/checkout", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(order),
//   });

//   const data = await response.json();
//   const orderConfirmation = data.orderUid;
//   // console.log(orderConfirmation);
//   alert(orderConfirmation);
//   return data.orderUid;
// }

// export function OrderConfirmation() {
//   let orderConfirmation = SendOrder();
//   return orderConfirmation;
// }

export type responseMessage = { type: "" };

export async function SendOrder(
  previousState: responseMessage,
  formData: FormData
) {
  // get customer info and food order and combine into required object for backend
  // event.preventDefault();
  // const formData = new FormData(event.currentTarget);
  // alert(formData.getAll.toString());
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
  // let status = response.statusText;
  const orderConfirmation =
    data.orderUid + data.customerName + data.customerEmail + data.customerPhone;
  // console.log(orderConfirmation);
  // alert(orderConfirmation);
  alert(status);
  if (status === 201) {
    return { type: orderConfirmation };
  } else {
    return { type: data.message };
  }
}
