"use client";
import { useMenuCategoryContext } from "@/context/menu-category-context";
import classes from "./nav-buttons.module.css";
import MenuIcon from "./menu-icon";
import MenuNav from "../../../menu/menu-navigation/menu-navigation";
import CartIcon from "./cart-icon";
import CartQuantity from "../../badges/cart-quantity";
import { useDisplayContext } from "@/context/display-context";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Cart from "@/components/cart/cart";
import { useCartContext } from "@/context/cart-context";
import { GetCart } from "@/lib/cart";

export default function NavButtons(menuOptions: { menuOptions: Category[] }) {
  const { setMenuCategories } = useMenuCategoryContext();
  const { showMenu, setShowMenu, showCart, setShowCart } = useDisplayContext();
  const { setCart, cartQuantity } = useCartContext();

  useEffect(() => {
    setMenuCategories(menuOptions.menuOptions);
    setCart(GetCart());

    if (cartQuantity <= 0) {
      setShowCart(false);
    }
  }, [
    cartQuantity,
    menuOptions.menuOptions,
    setCart,
    setMenuCategories,
    setShowCart,
  ]);

  return (
    <>
      <div className={classes.navButtons}>
        <CartQuantity />
        <nav className={classes.navButtons}>
          <button
            className={classes.menuButton}
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            <MenuIcon />
          </button>

          <button
            className={classes.cartButton}
            onMouseEnter={() => {
              if (cartQuantity > 0) setShowCart(true);
            }}
            onMouseLeave={() => setShowCart(false)}
          >
            <CartIcon />
          </button>
        </nav>
        <div className={classes.menu}>{showMenu && <MenuNav />}</div>
        <div>{showCart && <Cart />}</div>
      </div>
    </>
  );
}
