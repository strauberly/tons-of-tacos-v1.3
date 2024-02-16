"use client";

import { useGlobalContext } from "@/context/store";
import classes from "@/components/main-header/main-header.module.css";
import MenuIcon from "../main-header/menu-icon";
import { AnimatePresence } from "framer-motion";
import DropDown from "../ui/animations/drop-down";
import MenuNav from "../menu/menu-navigation/menu-navigation";
import { useCallback, useEffect, useMemo } from "react";
import useCategoriesSource from "@/lib/menuItemsByCategory";
import CartIcon from "../main-header/cart-icon";

export default function NavButtons() {
  const { showMenu, setShowMenu, setCategories, categories } =
    useGlobalContext();

  // const bu;
  // setCategories(props.categories);
  // console.log("cats" + categories.toString());
  // useEffect(() => {
  //   async function CategoryData() {
  //     setCategories(props.categories);
  //     // console.log("cats" + categories.toString());
  //     console.log(categories);
  //   }
  //   CategoryData();
  // }, [categories, props.categories, setCategories]);

  let menu = showMenu;

  const menuDisplay = menu;

  // const handleShowMenu = useCallback(
  //   function menuDisplay() {
  //     let menuShowing = showMenu;

  //     if ((menuShowing = false)) {
  //       setShowMenu(!showMenu);
  //     }
  //   },
  //   [setShowMenu, showMenu]
  // );

  function handleMenu() {
    console.log(showMenu);
    setShowMenu(true);
    console.log(showMenu);
  }

  // function to set and then just reference that function and see what happens

  return (
    <>
      <nav className={classes.navButtons}>
        <button
          onMouseEnter={() => handleMenu()}
          onMouseLeave={() => handleMenu()}
        >
          <MenuIcon />
        </button>
        <button
          onMouseEnter={() => handleMenu()}
          onMouseLeave={() => handleMenu()}
        >
          <CartIcon />
        </button>
      </nav>
      <div className={classes.menu}>
        <AnimatePresence mode="wait">
          {showMenu && (
            <DropDown>
              <MenuNav />
            </DropDown>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
