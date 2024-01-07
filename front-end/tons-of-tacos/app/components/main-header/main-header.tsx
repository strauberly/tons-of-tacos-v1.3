import Image from "next/image";
import classes from "./main-header.module.css";
import Link from "next/link";
import CartIcon from "./cart-icon";
import MenuIcon from "./menu-icon";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.home} href="/">
        Tons Of Tacos
      </Link>
      <div>
        <MenuIcon />
        <CartIcon />
      </div>
    </header>
  );
}
