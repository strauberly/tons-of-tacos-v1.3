"use client";
import classes from "./menu-nav.module.css";
import MenuCategories from "./menu-category-list";
import { useDisplayContext } from "@/context/display-context";
import { AnimatePresence } from "framer-motion";
import DropDown from "@/components/ui/animations/drop-down";
import { useRef, useEffect, useState, Suspense } from "react";

export default function MenuNav() {
  const { setShowMenu, showMenu } = useDisplayContext();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuRefClick = useRef(showMenu);
  // setShowMenu(false);
  const [show, setShow] = useState(true);
  useEffect(() => {
    function clickHandler(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        console.log("menu nav start: " + showMenu);
        // menuRefClick.current = false;
        setShow(false);
        setShowMenu(false);
        // console.log("menu nav: " + showMenu);
      }
    }
    document.addEventListener("click", clickHandler);
    // console.log("menu nav: " + showMenu);
    setShowMenu(true);
    // setShow(true);
    console.log("menu nav end: " + showMenu);
    // return () => document.removeEventListener("click", clickHandler);
  }, [menuRef, setShowMenu, showMenu, menuRefClick]);

  return (
    <div>
      <AnimatePresence>
        <DropDown>
          {show && (
            <div ref={menuRef} className={classes.menu}>
              <MenuCategories />
            </div>
          )}
        </DropDown>
      </AnimatePresence>
    </div>
  );
}
