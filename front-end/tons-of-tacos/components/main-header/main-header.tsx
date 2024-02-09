"use client";

import classes from "./main-header.module.css";
import Link from "next/link";
import CartIcon from "./cart-icon";
import MenuIcon from "./menu-icon";
import MenuNav from "@/components/menu/menu-navigation/menu-navigation";
import { useGlobalContext } from "@/context/store";
import useCategoriesSource from "@/lib/menuItemsByCategory";
import { useEffect } from "react";

export default function MainHeader() {
  const { showMenu, setShowMenu, setCategories } = useGlobalContext();

  // get and set all available menu categories for category name, description, and nav.
  useEffect(() => {
    async function CategoryData() {
      setCategories(await useCategoriesSource());
    }
    CategoryData();
  }, [setCategories]);

  return (
    <main>
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
        <div className={classes.menu}>{showMenu && <MenuNav />}</div>
      </header>
    </main>
  );
}
