// "use client";

import classes from "./main-header.module.css";
import Link from "next/link";
import useCategoriesSource from "@/lib/menu";
import NavButtons from "../nav-buttons/nav-buttons";
import { CreateCart } from "@/lib/cartFunctions";

export default async function MainHeader() {
  const categories = await useCategoriesSource();
  const menuOptions = categories;
  CreateCart();

  return (
    <>
      <header className={classes.header}>
        <Link className={classes.home} href="/">
          Tons Of Tacos
        </Link>
        <NavButtons menuOptions={menuOptions} />
      </header>
    </>
  );
}
