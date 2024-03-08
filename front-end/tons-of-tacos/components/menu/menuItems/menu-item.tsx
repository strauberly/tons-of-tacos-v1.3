import Card from "@/components/ui/cards/card";
import Image from "next/image";
import classes from "./menu-item.module.css";
import SizeSelector from "./size-selector/size-selector";
import QuantitySelector from "./quantity-selector/quantity-selector";
import { useEffect, useState } from "react";
import MoreIcon from "@/components/ui/icons/more-icon";
import { AddItemToCart } from "@/lib/cartFunctions";
import { CartContextProvider } from "@/context/cart-context";
import AddToCart from "@/components/ui/buttons/add-to-cart";

export default function MenuItem(props: {
  itemName: string;
  category: string;
  imageUrl: string;
  description: string;
  itemSize: string;
  unitPrice: number;
}) {
  const defaultQuantity: number = 1;
  let itemSizes = ["small", "medium", "large"];

  const [sizeAvailable, setSizeAvailable] = useState(false);
  const [quantity, setQuantity] = useState(defaultQuantity);
  const [size, setSize] = useState("");
  const [expand, setExpand] = useState(false);

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

  const price = calcPrice().toFixed(2);

  return (
    /* 
    conditionally style expanded card
    clicking on more expands >> adds description and close button
    clicking close button resets expand state to normal
    */
    <Card expand={expand} any={undefined}>
      <li
        className={`${classes.card} ${expand === true ? classes.expand : " "}`}
      >
        <h2>{props.itemName}</h2>
        {expand && (
          <button
            onClick={() => setExpand(false)}
            className={classes.closeExpanded}
          >
            X
          </button>
        )}
        <Image
          id={classes.itemImage}
          src={`/images/menu-items/${props.category}/${props.itemName}.jpg`}
          alt={`a picture of ${props.itemName}`}
          width={250}
          height={250}
        />
        <div className={classes.ghostDiv}>
          {expand && <p>{props.description}</p>}
          {sizeAvailable && (
            <SizeSelector
              sizes={itemSizes}
              sizeSetter={sizeSetter}
              sizeAvailable={sizeAvailable}
            />
          )}
        </div>

        <QuantitySelector
          value={quantity}
          increment={increment}
          decrement={decrement}
        />
        <p className={classes.price}>${price}</p>

        <AddToCart
          itemName={props.itemName}
          quantity={quantity}
          size={size}
          price={price}
        />

        {/* <button
          className={classes.add}
          onClick={() => AddItemToCart(props.itemName, quantity, size, price)}
        >
          Add To Cart
        </button> */}
        {!expand && (
          <button onClick={() => setExpand(true)}>
            <MoreIcon />
          </button>
        )}
      </li>
    </Card>
  );
}
