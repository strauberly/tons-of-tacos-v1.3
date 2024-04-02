"use client";
import { useNavContext } from "@/context/nav-context";
import classes from "@/components/main-header/main-header.module.css";
import MenuIcon from "./menu-icon";
import DropDown from "../../animations/drop-down";
import MenuNav from "../../../menu/menu-navigation/menu-navigation";
import { useEffect } from "react";
import CartIcon from "./cart-icon";
import CartQuantity from "../../badges/cart-quantity";
import { AnimatePresence } from "framer-motion";
import { useDisplayContext } from "@/context/display-context";

export default function NavButtons(menuOptions: { menuOptions: Category[] }) {
  const { setMenuNavCategories } = useNavContext();
  const { showMenu, setShowMenu } = useDisplayContext();

  useEffect(() => {
    if (window)
      sessionStorage.setItem(
        "categories",
        JSON.stringify(menuOptions.menuOptions)
      );

    setMenuNavCategories(menuOptions.menuOptions);
  }, [menuOptions, setMenuNavCategories]);

  return (
    <>
      <CartQuantity />
      <nav className={classes.navButtons}>
        <button
          className={classes.menuButton}
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          <MenuIcon />
        </button>
        <button className={classes.cartButton}>
          <CartIcon />
        </button>
      </nav>
      <div className={classes.menu}>
        {showMenu && (
          <AnimatePresence>
            <DropDown>
              <MenuNav />
            </DropDown>
          </AnimatePresence>
        )}
      </div>
    </>
  );
}
