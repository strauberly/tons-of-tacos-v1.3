"use client";

import classes from "@/components/main-header/main-header.module.css";
import MenuCategories from "./menu-category-list";

export default function MenuNav() {
  return (
    <nav className={classes.menu}>
      <MenuCategories />
    </nav>
  );
}
