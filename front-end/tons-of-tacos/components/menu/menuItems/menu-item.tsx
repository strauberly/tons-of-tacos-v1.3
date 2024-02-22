import Card from "@/components/ui/cards/card";
import Image from "next/image";
import classes from "./menu-item.module.css";
import SizeSelector from "./size-selector/size-selector";
import QuantitySelector from "./quantity-selector/quantity-selector";
import { SetStateAction, useState } from "react";

export default function MenuItem(props: {
  itemName: string;
  category: string;
  imageUrl: string;
  description: string;
  itemSize: string;
  unitPrice: number;
}) {
  const defaultValue: number = 1;

  const [quantity, setQuantity] = useState(defaultValue);

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
    if (quantity <= 1) {
      setQuantity(defaultValue);
    }
  };

  const total = quantity * props.unitPrice;

  console.log();
  return (
    <Card>
      <li className={classes.card}>
        <h2>{props.itemName}</h2>
        <Image
          id={classes.itemImage}
          src={`/images/menu-items/${props.category}/${props.itemName}.jpg`}
          alt={`a picture of ${props.itemName}`}
          width={250}
          height={250}
        />
        <SizeSelector />
        <QuantitySelector
          value={quantity}
          increment={increment}
          decrement={decrement}
        />
        <p id={classes.price}>${total.toFixed(2)}</p>
        <h1 id={classes.add}>Add To Cart Place Holder</h1>
        <Image
          className={classes.image}
          src={`/images/icons/more-icon.svg`}
          alt={"an interactive icon indicating more content"}
          width={50}
          height={50}
        />
      </li>
    </Card>
  );
}
