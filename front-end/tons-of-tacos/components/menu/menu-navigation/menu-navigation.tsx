"use client";
import classes from "@/components/main-header/main-header.module.css";
import MenuCategories from "./menu-category-list";
import { useGlobalContext } from "@/context/store";
import { useCallback } from "react";

export default function MenuNav() {
  const { setShowMenu, showMenu } = useGlobalContext();

  const handleShowMenu = useCallback(
    function menuDisplay() {
      setShowMenu(!showMenu);
    },
    [setShowMenu, showMenu]
  );

  return (
    <nav
      className={classes.menu}
      onMouseEnter={() => setShowMenu(showMenu)}
      onMouseLeave={() => setShowMenu(!showMenu)}
    >
      <MenuCategories />
    </nav>
  );
}
