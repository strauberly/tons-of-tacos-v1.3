"use client";
import { useMenuCategoryContext } from "@/context/menu-category-context";
import classes from "./nav-buttons.module.css";
import MenuIcon from "./menu-icon";
import MenuNav from "../../../menu/menu-navigation/menu-navigation";
import CartIcon from "./cart-icon";
import CartQuantity from "../../badges/cart-quantity";
import { useDisplayContext } from "@/context/display-context";
import { useEffect } from "react";
import Cart from "@/components/cart/cart";
import { useCartContext } from "@/context/cart-context";
import { GetCart } from "@/lib/cart";

export default function NavButtons(menuOptions: { menuOptions: Category[] }) {
  const { setMenuCategories } = useMenuCategoryContext();
  const { showMenu, setShowMenu, showCart, setShowCart } = useDisplayContext();
  const { setCart, cartQuantity } = useCartContext();

  function toggleMenu() {
    setShowCart(false);
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  function toggleCart() {
    setShowMenu(false);
    if (!showCart && cartQuantity > 0) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  }

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
          <button className={classes.menuButton} onClick={() => toggleMenu()}>
            <MenuIcon />
          </button>

          <button className={classes.cartButton} onClick={() => toggleCart()}>
            <CartIcon />
          </button>
        </nav>
        <div className={classes.menu}>{showMenu && <MenuNav />}</div>
        <div>{showCart && <Cart />}</div>
      </div>
    </>
  );
}
