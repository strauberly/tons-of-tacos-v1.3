"use client";
import classes from "./main-header.module.css";
import Link from "next/link";
import useCategoriesSource from "@/lib/menu";
import NavButtons from "@/components/ui/buttons/nav-buttons/nav-buttons";
import { useMenuCategoryContext } from "@/context/menu-category-context";
import { useEffect, useRef } from "react";
import NavButtonsCopy from "../ui/buttons/nav-buttons/nav-buttons-copy";

export default function MainHeader() {
  const { setMenuCategories } = useMenuCategoryContext();

  const categories = useRef<Category[]>([]);
  // let returned;

  // try {
  //   categories = await useCategoriesSource();
  // } catch (error) {
  //   throw new Error("We can't take online orders right now");
  // }
  // const menuOptions = categories;
  // try catch
  useEffect(() => {
    async function MenuSource() {
      categories.current = await useCategoriesSource();
      setMenuCategories(categories.current);
    }
    MenuSource();
  });

  return (
    <>
      <div className={classes.headerAlignment}>
        <header className={classes.header}>
          <Link className={classes.home} href="/">
            Tons Of Tacos
          </Link>
          <NavButtonsCopy />
        </header>
      </div>
    </>
  );
}
