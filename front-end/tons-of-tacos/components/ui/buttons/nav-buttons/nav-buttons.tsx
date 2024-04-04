"use client";
import { useMenuCategoryContext } from "@/context/menu-category-context";
import classes from "@/components/main-header/main-header.module.css";
import MenuIcon from "./menu-icon";
import DropDown from "../../animations/drop-down";
import MenuNav from "../../../menu/menu-navigation/menu-navigation";
import CartIcon from "./cart-icon";
import CartQuantity from "../../badges/cart-quantity";
import { AnimatePresence } from "framer-motion";
import { useDisplayContext } from "@/context/display-context";
import { useEffect } from "react";

export default function NavButtons(menuOptions: { menuOptions: Category[] }) {
  const { setMenuCategories } = useMenuCategoryContext();
  const { showMenu, setShowMenu } = useDisplayContext();
  useEffect(() => {
    setMenuCategories(menuOptions.menuOptions);
  }, [menuOptions.menuOptions, setMenuCategories]);

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
