"use client";

import MenuItemList from "@/components/menu/menuItems/menu-item-list";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import classes from "./page.module.css";
export default function MenuItemsByCategory({
  params,
}: {
  params: { menuCategory: string };
}) {
  const [menuItems, setMenuItems] = useState([]);
  let category = params.menuCategory;

  if (!["tacos", "sides", "toppings", "drinks"].includes(category)) {
    notFound();
  }

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
        <p className={classes.title}>
          A nice description about this menu category
        </p>
      </div>
      <div>{<MenuItemList menuitems={menuItems} />}</div>
    </main>
  );
}
