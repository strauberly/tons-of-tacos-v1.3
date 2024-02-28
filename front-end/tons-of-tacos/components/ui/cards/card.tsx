import classes from "@/components/ui/cards/card.module.css";
import { ReactNode } from "react";

// just encapsulates the actual meal item details styled as a li
export default function Card(props: {
  children: ReactNode;
  any: any;
  expand: boolean;
}) {
  return (
    <div
      className={`${classes.menucard} ${
        props.expand === true ? classes.expand : " "
      }`}
    >
      {props.children}
    </div>
  );
}
