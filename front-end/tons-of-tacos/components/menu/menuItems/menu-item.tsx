import Card from "@/components/ui/cards/card";
import Image from "next/image";
import classes from "./menu-item.module.css";

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
        <p>{itemName}</p>
        <Image
          className={classes.image}
          src={`/images/menu-items/${props.category}/${props.itemName}.jpg`}
          alt={`a picture of ${props.itemName}`}
          width={300}
          height={300}
        />
        <p>${props.unitPrice.toFixed(2)}</p>
        <p>placeholder for item size selection</p>
        <p>place holder for quantity selector</p>
        <p>... placeholder</p>
        <p>add to cart place holder</p>
      </li>
    </Card>
  );
}
