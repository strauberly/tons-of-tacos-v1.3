"use client";

import classes from "./main-header.module.css";
import Link from "next/link";
import CartIcon from "./cart-icon";
import MenuIcon from "./menu-icon";
import MenuNav from "@/components/menu/menu-navigation/menu-navigation";
import { useGlobalContext } from "@/context/store";
import useCategoriesSource from "@/lib/getCategories";
import { useEffect } from "react";

// const categoriesData: Promise<Category[]> = await getCategories();
// const returnedCategories = await categoriesData;
// console.log(`returned: ${returnedCategories}`);

export default function MainHeader(props: { menuCategories: Category }) {
  // export default function MainHeader(props: { menuCategories: Category[] }) {
  const { showMenu, setShowMenu, categories, setCategories } =
    useGlobalContext();

  // setCategories(returnedCategories);
  // console.log(`returned: ${categories}`);

  // useEffect(async () => {
  //   const returnedCategories = await getCategories();
  // });

  // useEffect(() => {
  //   async function categoryData() {
  //     // You can await here
  //     const response: Category[] = await getCategories();
  //     setCategories(response.json());
  //     // ...
  //   }
  //   categoryData();
  // }, [setCategories]);

  useEffect(() => {
    async function categoryData() {
      // You can await here
      // setCategories([]);
      const response: Promise<Category[]> = await useCategoriesSource();
      const returnedCategories = await response;
      setCategories(returnedCategories);
      // ...
    }
    categoryData();
  }, [setCategories]);

  return (
    <>
      {/* <p>{categories[0].description.toString()}</p> */}
      <header className={classes.header}>
        <Link className={classes.home} href="/">
          Tons Of Tacos
        </Link>
        <nav className={classes.nav}>
          <button onClick={() => setShowMenu(!showMenu)}>
            <MenuIcon />
          </button>
          <button>
            <CartIcon />
          </button>
        </nav>
      </header>
      <div className={classes.menu}>
        {showMenu && <MenuNav menuCategories={props.menuCategories} />}
      </div>
    </>
  );
}
