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
  const itemName: string[] = props.item_name.split(" ");

  for (let i = 0; i < itemName.length; i++) {
    itemName[i] = itemName[i][0].toUpperCase() + itemName[i].substring(1);
    if (i > 0 && itemName[i][0] !== " ") {
      itemName[i] = " " + itemName[i];
    }
  }

  return (
    <Card>
      <li className={classes.container}>
        <p>{itemName}</p>
        {/* <div className={classes.image}> */}
        <Image
          className={classes.image}
          src={`/images/menu-items/${props.category}/${props.item_name}.jpg`}
          // src={props.image_url}
          alt={`a picture of ${props.item_name}`}
          // fill={true}
          width={300}
          height={300}
        />
        {/* <p>{props.description}</p> */}
        <p>${props.unit_price}</p>
        <p>placeholder for item size selection</p>
        <p>place holder for quantity selector</p>
        <p>... placeholder</p>
        <p>add to cart place holder</p>
        {/* more info button */}
      </li>
    </Card>
  );
}
