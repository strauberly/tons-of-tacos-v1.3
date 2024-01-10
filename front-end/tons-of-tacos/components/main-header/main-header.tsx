"use client";

import classes from "./main-header.module.css";
import Link from "next/link";
import CartIcon from "./cart-icon";
import MenuIcon from "./menu-icon";
import { useState } from "react";
import MenuNav from "../menu/menu-navigation/menu-navigation";

export default function MainHeader() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
    <header className={classes.header}>
      <Link className={classes.home} href="/">
        Tons Of Tacos
      </Link>
      <nav className={classes.nav}>
        <button onClick={() => setShowMenu(!showMenu)}>
          <MenuIcon />
        </button>
        <button>
          <CartIcon />
        </button>
      </nav>
    </header>
        <div className={classes.menu}>{showMenu && MenuNav()}</div>
    </>
  );
}
