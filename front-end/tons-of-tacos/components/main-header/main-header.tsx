// "use client";

import classes from "./main-header.module.css";
import Link from "next/link";
import useCategoriesSource from "@/lib/menu";
import NavButtons from "../nav-buttons/nav-buttons";
import CartQuantity from "../ui/badges/cart-quantity";

export default async function MainHeader() {
  const categories = await useCategoriesSource();
  const menuOptions = categories;

  return (
    <>
      <header className={classes.header}>
        <Link className={classes.home} href="/">
          Tons Of Tacos
        </Link>
        {/* <CartQuantity /> */}
        <NavButtons menuOptions={menuOptions} />
      </header>
    </>
  );
}
