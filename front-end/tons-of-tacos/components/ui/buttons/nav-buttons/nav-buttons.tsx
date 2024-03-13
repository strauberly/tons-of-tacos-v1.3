"use client";
import { useGlobalContext } from "@/context/store";
import classes from "@/components/main-header/main-header.module.css";
import MenuIcon from "./menu-icon";
import DropDown from "../../animations/drop-down";
import MenuNav from "../../../menu/menu-navigation/menu-navigation";
import { useEffect } from "react";
import CartIcon from "./cart-icon";
import CartQuantity from "../../badges/cart-quantity";

export default function NavButtons(menuOptions: { menuOptions: Category[] }) {
  const { showMenu, setShowMenu, setMenuNavCategories } = useGlobalContext();

  useEffect(() => {
    if (window)
      sessionStorage.setItem(
        "categories",
        JSON.stringify(menuOptions.menuOptions)
      );

    setMenuNavCategories(menuOptions.menuOptions);
  }, [menuOptions, setMenuNavCategories]);

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
