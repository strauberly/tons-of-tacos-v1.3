import Card from "@/components/ui/card";
import Image from "next/image";

export default function MenuItem(props: {
  item_name: string;
  image_url: string;
  description: string;
  item_size: string;
  unit_price: number;
}) {
  // need a conditional for displaying size div or not
  return (
    <Card>
      <li>
        <p>{props.item_name}</p>
        <Image
          src={props.image_url}
          alt={`a picture of ${props.item_name}`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "15%", height: "auto" }}
        />
        <p>{props.description}</p>
        <p>{props.unit_price}</p>
        <p>placeholder for item size selection</p>
        <p>place holder for quantity selector</p>
        <p>... placeholder</p>
        <p>add to cart place holder</p>
        {/* more info button */}
      </li>
    </Card>
  );
}
