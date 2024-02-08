import Card from "@/components/ui/card";
import Image from "next/image";
import classes from "./menu-item.module.css";

export default function MenuItem(props: {
  key: string;
  item_name: string;
  category: string;
  image_url: string;
  description: string;
  item_size: string;
  unit_price: number;
}) {
  //  Capitalize first letter of each word
  const itemName: string[] = props.item_name.split(" ");

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
          src={`/images/menu-items/${props.category}/${props.item_name}.jpg`}
          alt={`a picture of ${props.item_name}`}
          width={300}
          height={300}
        />
        <p>${props.unit_price.toFixed(2)}</p>
        <p>placeholder for item size selection</p>
        <p>place holder for quantity selector</p>
        <p>... placeholder</p>
        <p>add to cart place holder</p>
      </li>
    </Card>
  );
}
