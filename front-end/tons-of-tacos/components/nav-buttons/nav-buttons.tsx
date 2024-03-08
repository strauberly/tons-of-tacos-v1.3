"use client";
import { useGlobalContext } from "@/context/store";
import classes from "@/components/main-header/main-header.module.css";
import MenuIcon from "../main-header/menu-icon";
import DropDown from "../ui/animations/drop-down";
import MenuNav from "../menu/menu-navigation/menu-navigation";
import { useEffect } from "react";
import CartIcon from "../main-header/cart-icon";
import { CreateCart } from "@/lib/cartFunctions";
import CartQuantity from "../ui/badges/cart-quantity";
import { useCartContext } from "@/context/cart-context";
import CartQuantityChange from "../ui/animations/cart-quantity-change";

export default function NavButtons(menuOptions: { menuOptions: Category[] }) {
  const { showMenu, setShowMenu, setMenuNavCategories } = useGlobalContext();

  const { itemsInCart, setItemsInCart, setCartQuantity, cartQuantity } =
    useCartContext();

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

  if (cartQuantity > 0) {
    setItemsInCart(true);
  }

  useEffect(() => {
    async function CartQuantity() {
      let quantity: number = 0;
      const cartItems: CartItem[] = JSON.parse(
        sessionStorage.getItem("tons-of-tacos-cart") || "{}"
      );

      const cartQuantity: number[] = cartItems.map(
        (cartItem) => cartItem.quantity
      );

      cartQuantity.forEach((num) => (quantity += num));
      setCartQuantity(quantity);
    }
    CartQuantity();
  }, [setCartQuantity]);

  return (
    <>
      <nav className={classes.navButtons}>
        <button
          onMouseEnter={() => handleMenu()}
          onMouseLeave={() => handleMenu()}
        >
          <MenuIcon />
        </button>

        {itemsInCart && <CartQuantity quantity={cartQuantity} />}

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
