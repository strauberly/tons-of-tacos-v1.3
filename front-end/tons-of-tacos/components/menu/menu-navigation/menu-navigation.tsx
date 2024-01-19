import Link from "next/link";
import classes from "@/components/main-header/main-header.module.css";
// import { Children } from "react";

export default function MenuNav() {
  // this will be an api call eventually to load menu category options from the api ie (get all from a categories table and put into array, for each in the array create a list item. This way then menu categories can be maintained dynamically)

  return (
    <nav className={classes.menu}>
      <ul>
        <li>
          <Link href="/tacos">Tacos</Link>
        </li>
        <li>
          <Link href="/toppings">Toppings</Link>
        </li>
        <li>
          <Link href="/sides">Sides</Link>
        </li>
        <li>
          <Link href="/drinks">Drinks</Link>
        </li>
      </ul>
    </nav>
  );
}
