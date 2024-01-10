import Link from "next/link";
import classes from "@/components/main-header/main-header.module.css";
import { Children } from "react";

export default function MenuNav() {
  return (
    <nav className={classes.menu}>
      <ul>
        <li>
          <Link href="/menu/tacos">Tacos</Link>
        </li>
        <li>
          <Link href="/menu/toppings">Toppings</Link>
        </li>
        <li>
          <Link href="/menu/sides">Sides</Link>
        </li>
        <li>
          <Link href="/menu/drinks">Drinks</Link>
        </li>
      </ul>
    </nav>
  );
}
