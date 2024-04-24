import { useState } from "react";
import QuantitySelector from "../menu/menu-items/quantity-selector/quantity-selector";

import classes from "./cart-item.module.css";

export default function CartItem(props: {
  itemName: string;
  itemQuantity: number;
  size: string;
  itemPrice: string;
}) {
  const [quantity, setQuantity] = useState(props.itemQuantity);
  // this will be changed to get quantity from item stowed in cart
  // const itemQuantity: number = 1;

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  const adjPrice: number =
    parseInt(props.itemPrice) -
    (parseInt(props.itemPrice) / props.itemQuantity) * quantity;

  console.log(props.itemPrice);

  return (
    <li className={classes.item}>
      <p>{props.itemName}</p>
      <p> {props.size}</p>
      <QuantitySelector
        value={props.itemQuantity}
        increment={increment}
        decrement={decrement}
      />
      <p> ${adjPrice}</p>
    </li>
  );
}
