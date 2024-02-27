import Card from "@/components/ui/cards/card";
import Image from "next/image";
import classes from "./menu-item.module.css";
import SizeSelector from "./size-selector/size-selector";
import QuantitySelector from "./quantity-selector/quantity-selector";
import { useEffect, useRef, useState } from "react";
import MoreIcon from "@/components/ui/icons/more-icon";

export default function MenuItem(props: {
  itemName: string;
  category: string;
  imageUrl: string;
  description: string;
  itemSize: string;
  unitPrice: number;
}) {
  const defaultQuantity: number = 1;

  let items = useRef<string[]>();

  let itemSizes = ["small", "medium", "large"];

  const [sizeAvailable, setSizeAvailable] = useState(false);
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

  useEffect(() => {
    if (props.itemSize === "a") {
      setSizeAvailable(true);
    }
  }, [props.itemSize]);

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
        <SizeSelector
          sizes={itemSizes}
          sizeSetter={sizeSetter}
          sizeAvailable={sizeAvailable}
        />
        <QuantitySelector
          value={quantity}
          increment={increment}
          decrement={decrement}
        />
        <p className={classes.price}>${calcPrice().toFixed(2)}</p>
        <button className={classes.add}>Add To Cart</button>
        <button>
          <MoreIcon />
        </button>
      </li>
    </Card>
  );
}
