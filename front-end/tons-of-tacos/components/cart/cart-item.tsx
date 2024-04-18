import { useState } from "react";
import QuantitySelector from "../menu/menu-items/quantity-selector/quantity-selector";

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

  return (
    <li>
      <>{props.itemName}</>
      <p>item name placeholder</p>
      <QuantitySelector
        value={quantity}
        increment={increment}
        decrement={decrement}
      />
      <>quantity selector placeholder</>
      <>{props.size}</>
      <>size if it exists placeholder</>
      <>{adjPrice}</>
      <>item price place holder</>
    </li>
  );
}
