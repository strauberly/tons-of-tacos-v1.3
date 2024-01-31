"use client";

import MenuItemList from "@/components/menu/menuItems/menu-item-list";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import classes from "./page.module.css";
import { useGlobalContext } from "@/context/store";

export default function MenuItemsByCategory({
  params,
}: {
  params: { menuCategory: string };
}) {
  const { categories } = useGlobalContext();

  console.log(categories.toString());

  const menuOptions: string[] = [];

  categories.map((menucategory: { name: string }) =>
    menuOptions.push(menucategory.name)
  );

  console.log(`menu options: ${menuOptions}`);

  const [menuItems, setMenuItems] = useState([]);

  let category = params.menuCategory;

  console.log(category);

  if (!menuOptions.includes(category)) {
    notFound();
  }

  // if (!["tacos", "sides", "toppings", "drinks"].includes(category)) {
  //   notFound();
  // }

  let description: string | undefined = categories
    .find(function (mc) {
      return mc.name === `${category}`;
    })
    ?.description.toString();

  useEffect(() => {
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
