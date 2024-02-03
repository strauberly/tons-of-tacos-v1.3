"use client";

import MenuItemList from "@/components/menu/menuItems/menu-item-list";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import classes from "./page.module.css";
import { useGlobalContext } from "@/context/store";
import { SourceTextModule } from "vm";

export default function MenuItemsByCategory({
  params,
}: {
  params: { menuCategory: string };
}) {
  const { categories } = useGlobalContext();

  console.log(categories.toString());

  // const menuOptions: string[] = [];

  // categories.map((menucategory: { name: string }) =>
  //   menuOptions.push(menucategory.name)
  // );
  // if (typeof localStorage !== "undefined") {
  // }
  // const cat: Category[] = JSON.parse(localStorage.getItem("categories"));
  // console.log(`local storage : ${cat}`);

  // const menuoptions = cat.map((cat: { name: string }) => cat.name);

  const [menuItems, setMenuItems] = useState([]);

  // console.log(`menu options: ${menuoptions}`);

  let category = params.menuCategory;

  console.log(category);

  // if (!menuOptions.includes(category)) {
  //   notFound();
  // }

  // const menuOptions = categories.map(
  //   (category: { name: string }) => category.name
  // );

  // const options = menuOptions;

  // console.log(`menu options: ${menuOptions}`);

  // if (!["tacos", "sides", "toppings", "drinks"].includes(category)) {
  //   notFound();
  // }

  // if (!menuoptions.includes(category)) {
  //   notFound();
  // }

  let description: string | undefined = categories
    .find(function (mc) {
      return mc.name === `${category}`;
    })
    ?.description.toString();

  useEffect(() => {
    const cat: Category[] = JSON.parse(
      sessionStorage.getItem("categories") || "{}"
    );
    const menuoptions: string[] = cat.map((cat: { name: string }) => cat.name);

    if (!menuoptions.includes(category)) {
      notFound();
    }
    fetch(`http://localhost:8080/api/menu/category?category=${category}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMenuItems(data);
      });
  }, [category]);

  return (
    <main>
      <div className={classes.category}>
        <h1>{category + ":"}</h1>
        <p className={classes.title}>{description}</p>
      </div>
      <div>{<MenuItemList menuitems={menuItems} />}</div>
    </main>
  );
}
