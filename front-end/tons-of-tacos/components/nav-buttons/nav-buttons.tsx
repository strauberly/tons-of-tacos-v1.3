"use client";

import { useGlobalContext } from "@/context/store";
import classes from "@/components/main-header/main-header.module.css";
import MenuIcon from "../main-header/menu-icon";
import DropDown from "../ui/animations/drop-down";
import MenuNav from "../menu/menu-navigation/menu-navigation";
import { useEffect, useState } from "react";
import CartIcon from "../main-header/cart-icon";
import { CreateCart } from "@/lib/cartFunctions";
import CartQuantity from "../ui/badges/cart-quantity";

export default function NavButtons(menuOptions: { menuOptions: Category[] }) {
  const { showMenu, setShowMenu, setMenuNavCategories } = useGlobalContext();

  // set returned categories to local storage and set context/ use ref? not rerendering may cause issue
  useEffect(() => {
    if (window)
      sessionStorage.setItem(
        "categories",
        JSON.stringify(menuOptions.menuOptions)
      );

    CreateCart();
    setMenuNavCategories(menuOptions.menuOptions);
  }, [menuOptions, setMenuNavCategories]);

  // nav menu opens and stays open until mouse leaves or user selects category
  // extend the bottom border to underlap with menu
  function handleMenu() {
    setShowMenu(true);
  }

  return (
    <>
      <nav className={classes.navButtons}>
        <button
          onMouseEnter={() => handleMenu()}
          onMouseLeave={() => handleMenu()}
        >
          <MenuIcon />
        </button>
        <CartQuantity />
        <button>
          <CartIcon />
        </button>
      </nav>
      <div className={classes.menu}>
        {showMenu && (
          <DropDown>
            <MenuNav />
          </DropDown>
        )}
      </div>
    </>
  );
}
