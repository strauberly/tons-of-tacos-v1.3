import { useState } from "react";
import QuantitySelector from "../menu/menu-items/quantity-selector/quantity-selector";

import classes from "./cart-item.module.css";
import RemoveFromCart from "../ui/buttons/remove-from-cart/remove-from-cart";

export default function CartItem(props: {
  itemName: string;
  itemQuantity: number;
  size: string;
  itemPrice: string;
}) {
  const [quantity, setQuantity] = useState(props.itemQuantity);
  // this will be changed to get quantity from item stowed in cart
  // const itemQuantity: number = 1;

  // const [price, setPrice] = useState(parseInt(props.itemPrice));

  // let price = props.itemPrice;

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  function calcPrice() {
    let adjPrice: number;

    adjPrice = (parseInt(props.itemPrice) / props.itemQuantity) * quantity;
    return adjPrice;
  }

  const price = calcPrice().toFixed(2);

  // const price: number =
  //   parseInt(props.itemPrice) -
  //   (parseInt(props.itemPrice) / props.itemQuantity) * quantity;

  console.log(props.itemPrice);

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
      <RemoveFromCart cartItem={props.itemName} />
    </li>
  );
}
