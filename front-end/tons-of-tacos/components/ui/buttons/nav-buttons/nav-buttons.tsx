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
import Cart from "@/components/cart/cart";
import { useCartContext } from "@/context/cart-context";
import { GetCart } from "@/lib/cart";
import CustomerInfoForm from "../../forms/customer-info-form";
import getCustomerAction from "@/lib/actions";
import GetCustomerInfoAction from "@/lib/actions";
import CustomerInfoValidation from "@/lib/actions";
import customerInfoValidation from "@/lib/actions";

export default function NavButtons(menuOptions: { menuOptions: Category[] }) {
  const { setMenuCategories } = useMenuCategoryContext();
  const { showMenu, setShowMenu, showCart, setShowCart, showCustomerInfoForm } =
    useDisplayContext();

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
      <div className={classes.menu}>
        {showMenu && (
          <AnimatePresence>
            <DropDown>
              <MenuNav />
            </DropDown>
          </AnimatePresence>
        )}
      </div>
      <div className={classes.cart}>
        {showCart && (
          <AnimatePresence>
            <DropDown>
              <Cart />
            </DropDown>
          </AnimatePresence>
        )}
      </div>
      {showCustomerInfoForm && (
        <CustomerInfoForm action={CustomerInfoValidation} />
      )}
    </>
  );
}
