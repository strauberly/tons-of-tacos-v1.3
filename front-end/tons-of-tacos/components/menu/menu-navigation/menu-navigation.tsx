/* eslint-disable @next/next/no-async-client-component */
"use client";
import Link from "next/link";
import classes from "@/components/main-header/main-header.module.css";
import MenuCategories from "./menu-category-list";
import getCategories from "@/lib/getCategories";
import { useEffect, useState } from "react";
// import { useState } from "react";
// import { Children } from "react";
// ask for props here then define main header file

// async function returnCategories() {
//   const categoriesData = getCategories();
//   return categoriesData;
// }

// interface PropsDefinition {
//   showMenu: boolean;
//   setShowMenu(data: boolean): void;
//   categories: Category[];
// }

export default function MenuNav(props: { menuCategories: Category[] }) {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   let categories: Category[];
  //   fetch("http://localhost:8080/api/utility/categories", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   }).then((response) => setData((categories = response.body())));
  // }, []);

  // fetch("http://localhost:8080/api/utility/categories");

  // let categories;

  // fetch("http://localhost:8080/api/utility/categories", {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json" },
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     categories = data;
  //   });

  // this will be an api call eventually to load menu category options from the api ie (get all from a categories table and put into array, for each in the array create a list item. This way then menu categories can be maintained dynamically)

  // const [, setShowMenu] = useState(false);

  // const categoriesData: Promise<Category[]> = getCategories();
  // const categories = categoriesData;

  // const categories = await returnCategories();

  return (
    <nav className={classes.menu}>
      <MenuCategories menuCategories={props.menuCategories} />
      {/* <ReturnCategories /> */}
    </nav>
    // <nav className={classes.menu}>
    //   <ul>
    //     <li>
    //       <Link href="/tacos">Tacos</Link>
    //     </li>
    //     <li>
    //       <Link href="/toppings">Toppings</Link>
    //     </li>
    //     <li>
    //       <Link href="/sides">Sides</Link>
    //     </li>
    //     <li>
    //       <Link href="/drinks">Drinks</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
}
