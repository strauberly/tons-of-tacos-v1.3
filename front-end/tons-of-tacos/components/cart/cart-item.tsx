import { useEffect, useState } from "react";
import QuantitySelector from "../menu/menu-items/quantity-selector/quantity-selector";

import classes from "./cart-item.module.css";
import RemoveFromCart from "../ui/buttons/remove-from-cart/remove-from-cart";
import Update from "../ui/buttons/update-cart-item/update-cart-item";
import { useCartContext } from "@/context/cart-context";
import { GetCart, RemoveCartItem } from "@/lib/cartFunctions";

export default function CartItem(props: {
  id: string;
  itemName: string;
  itemQuantity: number;
  size: string;
  itemPrice: string;
}) {
  const [quantity, setQuantity] = useState(props.itemQuantity);
  const { setCart, cartQuantity, setCartQuantity } = useCartContext();

  const increment = () => {
    if (quantity >= 10) {
      alert(
        "The limit for this item is 10. If you need more please give us a call so we can try to accommodate your order. Thanks!"
      );
    } else {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    setQuantity(quantity - 1);
    if (quantity <= 1) {
      RemoveCartItem(props.itemName);
      setCart(GetCart());
      setCartQuantity(cartQuantity - props.itemQuantity);
    } else {
    }
  };

  function calcPrice() {
    let adjPrice;

    adjPrice = (parseFloat(props.itemPrice) / props.itemQuantity) * quantity;
    return adjPrice;
  }

  const price = calcPrice().toFixed(2);

  return (
    <li className={classes.item}>
      <p>{props.itemName}</p>
      <p className={classes.size}> {props.size}</p>
      <QuantitySelector
        value={quantity}
        increment={increment}
        decrement={decrement}
      />
      <p className={classes.price}> ${price}</p>

      <Update
        cartItem={props.itemName}
        updatedItemQuantity={quantity}
        updatedItemPrice={price}
        oldQuantity={props.itemQuantity}
      />

      <RemoveFromCart
        id={props.id}
        // cartItem={props.itemName}
        cartItemQuantity={props.itemQuantity}
      />
    </li>
  );
}
