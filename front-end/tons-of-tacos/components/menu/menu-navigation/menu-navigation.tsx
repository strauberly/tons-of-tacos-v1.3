"use client";
import classes from "@/components/main-header/main-header.module.css";
import MenuCategories from "./menu-category-list";
import { useGlobalContext } from "@/context/store";

export default function MenuNav() {
  const { setShowMenu } = useGlobalContext();

  return (
    <nav
      className={classes.menu}
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <MenuCategories />
    </nav>
  );
}
