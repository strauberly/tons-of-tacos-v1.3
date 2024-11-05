"use client";
import classes from "./menu-nav.module.css";
import MenuCategories from "./menu-category-list";
import { useDisplayContext } from "@/context/display-context";
import { AnimatePresence } from "framer-motion";
import DropDown from "@/components/ui/animations/drop-down";

export default function MenuNav() {
  const { setShowMenu } = useDisplayContext();

  return (
    <>
      <AnimatePresence>
        <DropDown>
          <nav
            className={classes.menu}
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            <MenuCategories />
          </nav>
        </DropDown>
      </AnimatePresence>
    </>
  );
}
