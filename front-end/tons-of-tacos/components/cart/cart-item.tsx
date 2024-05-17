import { useEffect, useState } from "react";
import QuantitySelector from "../menu/menu-items/quantity-selector/quantity-selector";

import classes from "./cart-item.module.css";
import RemoveFromCart from "../ui/buttons/remove-from-cart/remove-from-cart";
import Update from "../ui/buttons/update-cart-item/update-cart-item";
import { useCartContext } from "@/context/cart-context";

export default function CartItem(props: {
  itemName: string;
  itemQuantity: number;
  size: string;
  itemPrice: string;
}) {
  const [quantity, setQuantity] = useState(props.itemQuantity);
  // const [quantityChanged, setQuantityChanged] = useState(false);
  // const { itemQuantityChanged, setItemQuantityChanged } = useCartContext();
  // this will be changed to get quantity from item stowed in cart
  // const itemQuantity: number = 1;

  // const [price, setPrice] = useState(parseInt(props.itemPrice));

  // let price = props.itemPrice;

  const increment = () => {
    setQuantity(quantity + 1);
    if (quantity >= 10) {
      setQuantity(10);
      alert(
        "The limit for this item is 10. If you need more please give us a call so we can try to accommodate your order. Thanks!"
      );
    }
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  function calcPrice() {
    let adjPrice;

    adjPrice = (parseFloat(props.itemPrice) / props.itemQuantity) * quantity;
    return adjPrice;
  }

  const price = calcPrice().toFixed(2);

  // const price: number =
  //   parseInt(props.itemPrice) -
  //   (parseInt(props.itemPrice) / props.itemQuantity) * quantity;

  console.log(props.itemPrice);

  // useEffect(() => {
  //   if (quantity != props.itemQuantity) {
  //     setItemQuantityChanged(true);
  //   }
  // }, [props.itemQuantity, quantity, setItemQuantityChanged]);

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
        cartItem={props.itemName}
        cartItemQuantity={props.itemQuantity}
      />
    </li>
  );
}
