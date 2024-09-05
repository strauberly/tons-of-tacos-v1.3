import cartItem from "@/components/cart/cart-item";
import { FormEvent } from "react";

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

// export function SendOrder(formData: FormData) {
//   // get customer info and food order and combine into required object for backend
//   let firstName = formData.get("first_name");
//   alert({ firstName });
// }

export function SendOrder(event: FormEvent<HTMLFormElement>) {
  // get customer info and food order and combine into required object for backend
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  let firstName = formData.get("first_name");
  let lastName = formData.get("last_name");
  let phone = formData.get("phone");
  let email = formData.get("email");
  const name = firstName + " " + lastName;
  const customerData = JSON.stringify(Object.fromEntries(formData.entries()));
  //   const customer = "customer: {

  // }"

  // alert(`${firstName} ` + `${lastName} ` + `${phone} ` + `${email} `);

  //    {
  //   "customer": {
  //     "name": "billy billson",
  //     "email": "billy@bolly.com",
  //     "phoneNumber": "555.555.5959"
  // },

  //      {
//     "customer": {
//       "name": "billy billson",
//       "email": "billy@bolly.com",
//       "phoneNumber": "555.555.5959"
//   },
//   "order": {
//       "orderItems": [
//           {
//               "item": {
//                   "id": 7
//               },
//               "quantity": 2,
//               "size": "l"
//           },
//           {
//               "item": {
//                   "id": 12
//               },
//               "quantity": 1,
//               "size": " "
//           },
//           {
//               "item": {
//                   "id": 3
//               },
//               "quantity": 3,
//               "size": " "
//           }
//       ]
//   }
// }

  const order = {
    customer: {
      name: firstName + " " + lastName,
      email: email,
      phoneNumber: phone,
    },
    order: {
      orderItems: 
    }
  };
  // alert("{customer: " + customerData + "},");

  alert(JSON.stringify(order));
}
