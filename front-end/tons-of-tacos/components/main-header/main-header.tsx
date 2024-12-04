"use client";
import classes from "./main-header.module.css";
import Link from "next/link";
import CategoriesSource from "@/lib/menu";
import NavButtons from "@/components/ui/buttons/nav-buttons/nav-buttons";
import { useAlertContext } from "@/context/alert-context";
import { useDisplayContext } from "@/context/display-context";
import { useEffect, useRef } from "react";

export default function MainHeader() {
  const categories = useRef<Category[]>([]);

  const { setAlert } = useAlertContext();
  const { setShowAlert } = useDisplayContext();

  useEffect(() => {
    async function MenuSource() {
      try {
        categories.current = await CategoriesSource();
      } catch (error) {
        setAlert(
          "Bummer, looks like our systems are down. Give us a call for more info or please try again later. Thanks!"
        );
        setShowAlert(true);
      }
    }
    MenuSource();
  });

  // set as context to be used elsewhere in app
  const menuOptions = categories.current;

  return (
    <>
      <div className={classes.headerAlignment}>
        <header className={classes.header}>
          <Link className={classes.home} href="/">
            Tons Of Tacos
          </Link>
          <NavButtons menuOptions={menuOptions} />
        </header>
      </div>
    </>
  );
}
