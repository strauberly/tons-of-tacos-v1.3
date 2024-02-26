import Card from "@/components/ui/cards/card";
import Image from "next/image";
import classes from "./menu-item.module.css";
import SizeSelector from "./size-selector/size-selector";
import QuantitySelector from "./quantity-selector/quantity-selector";
import { useState } from "react";

export default function MenuItem(props: {
  itemName: string;
  category: string;
  imageUrl: string;
  description: string;
  itemSize: string;
  unitPrice: number;
}) {
  const defaultQuantity: number = 1;
  const itemSizes: string[] = ["small", "medium", "large"];

  const [quantity, setQuantity] = useState(defaultQuantity);
  const [size, setSize] = useState("");

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
      setQuantity(defaultQuantity);
    }
  };

  const sizeSetter = (sizePicked: string) => {
    setSize(sizePicked);
  };

  function calcPrice() {
    let adjPrice: number;
    let sizeSurcharge = 0;

    switch (size) {
      case "medium":
        sizeSurcharge = 0.5;
        break;
      case "large":
        sizeSurcharge = 1.0;
        break;
    }

    adjPrice = (sizeSurcharge + props.unitPrice) * quantity;
    return adjPrice;
  }

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
        <SizeSelector sizes={itemSizes} sizeSetter={sizeSetter} />
        <QuantitySelector
          value={quantity}
          increment={increment}
          decrement={decrement}
        />
        <p id={classes.price}>${calcPrice().toFixed(2)}</p>
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
