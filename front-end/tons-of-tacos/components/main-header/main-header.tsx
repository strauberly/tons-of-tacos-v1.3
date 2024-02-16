"use client";

import classes from "./main-header.module.css";
import Link from "next/link";
import CartIcon from "./cart-icon";
import MenuIcon from "./menu-icon";
import MenuNav from "@/components/menu/menu-navigation/menu-navigation";
import { useGlobalContext } from "@/context/store";
import useCategoriesSource from "@/lib/menuItemsByCategory";
import { useEffect } from "react";
import DropDown from "../ui/animations/drop-down";
import { AnimatePresence } from "framer-motion";
import NavButtons from "../nav-buttons/nav-buttons";

//  make data calls here and set the individual contexts in the button component //

export default function MainHeader() {
  // const categoryList = (await useCategoriesSource()) as Category[];

  // const list = categoryList;

  const { showMenu, setShowMenu, setCategories } = useGlobalContext();

  // get and set all available menu categories for category name, description, and nav.
  useEffect(() => {
    async function CategoryData() {
      setCategories(await useCategoriesSource());
    }
    CategoryData();
  }, [setCategories]);

  return (
    <>
      <header className={classes.header}>
        <Link className={classes.home} href="/">
          Tons Of Tacos
        </Link>
        <NavButtons />
      </header>
    </>
  );
}
