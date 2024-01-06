import Image from "next/image";
import menuIcon from "/public/images/icons/menu-icon.svg";
import cartIcon from "/public/images/icons/cart-icon.svg";
import classes from "./main-header.module.css";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.home} href="/">
        Tons Of Tacos
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link className={classes.home} href="/">
              <Image src={menuIcon} alt="menu icon" priority />
            </Link>
          </li>
          <li>
            <Link className={classes.home} href="/">
              <Image src={cartIcon} alt="cart icon" priority />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
