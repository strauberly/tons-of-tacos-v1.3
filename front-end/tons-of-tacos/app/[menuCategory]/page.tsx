"use client";

import MenuItemList from "@/components/menu/menuItems/menu-item-list";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import classes from "./page.module.css";
import { useGlobalContext } from "@/context/store";
import { useMenuItemsForCategory } from "@/lib/menuItemsByCategory";

export default function MenuItemsByCategory({
  params,
}: {
  params: { menuCategory: string };
}) {
  const { categories } = useGlobalContext();
  const [menuItems, setMenuItems] = useState([]);

  // desired category captured from params
  let category = params.menuCategory;

  // get and set category description
  let description: string | undefined = categories
    .find(function (mc) {
      return mc.name === `${category}`;
    })
    ?.description.toString();

  // get all the menu items for the provided category if it exists
  useEffect(() => {
    async function DisplayMenuItems() {
      const cat: Category[] = JSON.parse(
        localStorage.getItem("categories") || "{}"
      );

      const menuOptions: string[] = cat.map(
        (cat: { name: string }) => cat.name
      );

      if (!menuOptions.includes(category)) {
        notFound();
      }

      setMenuItems(await useMenuItemsForCategory(category));
    }
    DisplayMenuItems();
  }, [category]);

  return (
    <main className={classes.main}>
      <div className={classes.category}>
        <h1>{category + ":"}</h1>
        <p className={classes.title}>{description}</p>
      </div>
      <div>{<MenuItemList menuItems={menuItems} />}</div>
    </main>
  );
}
