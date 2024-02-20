import Card from "@/components/ui/cards/card";
import Image from "next/image";
import classes from "./menu-item.module.css";
import ArrowIcon from "./arrow-icon";

export default function MenuItem(props: {
  itemName: string;
  category: string;
  imageUrl: string;
  description: string;
  itemSize: string;
  unitPrice: number;
}) {
  //  Capitalize first letter of each word
  const itemName: string[] = props.itemName.split(" ");

  for (let i = 0; i < itemName.length; i++) {
    itemName[i] = itemName[i][0].toUpperCase() + itemName[i].substring(1);
    if (i > 0 && itemName[i][0] !== " ") {
      itemName[i] = " " + itemName[i];
    }
  }

  return (
    <Card>
      <li className={classes.card}>
        <h2>{itemName}</h2>
        <Image
          id={classes.itemImage}
          src={`/images/menu-items/${props.category}/${props.itemName}.jpg`}
          alt={`a picture of ${props.itemName}`}
          width={300}
          height={300}
        />
        <p id={classes.size}>placeholder for size</p>
        <div className={classes.quantity}>
          <button className={`${classes.decrement}`}>
            <ArrowIcon />
          </button>
          <>
            <input
              type="number"
              defaultValue={1}
              min="1"
              max="10"
              disabled={true}
            />
          </>
          <button className={`${classes.increment}`}>
            <ArrowIcon />
          </button>
        </div>

        <p id={classes.price}>${props.unitPrice.toFixed(2)}</p>
        <h1 id={classes.add}>Add To Cart Place Holder</h1>
        <Image
          className={classes.image}
          src={`/images/icons/more-icon.svg`}
          alt={`a picture of ${props.itemName}`}
          width={50}
          height={50}
        />
      </li>
    </Card>
  );
}
