"use client";
import classes from "./menu-nav.module.css";
// import classes from "@/components/main-header/main-header.module.css";
import MenuCategories from "./menu-category-list";
import { useDisplayContext } from "@/context/display-context";

export default function MenuNav() {
  const { setShowMenu } = useDisplayContext();

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
