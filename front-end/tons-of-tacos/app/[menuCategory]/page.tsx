"use client";

import MenuItemList from "@/components/menu/menuItems/menu-item-list";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import classes from "./page.module.css";
// import classes from "./";
// this will take the slug for menu items category and give the properties needed
// let TACO_DUMMY_DATA: {keys:types}[] = [];
// attempt interface in order to validate the object?

// data call outsourced to library perhaps
// possibly pre-render api calls so we can still use switch to display data

let TACO_SAMPLE_DATA: {
  category: string;
  description: string;
  item_name: string;
  item_size: string;
  image_url: string;
  unit_price: number;
}[] = [
  {
    category: "taco",
    description: "nom nom",
    item_name: "pound",
    item_size: "null",
    image_url: "/images/menu-items/tacos/pound.jpg",
    unit_price: 2.25,
  },
  {
    category: "taco",
    description: "nom nom",
    item_name: "golden pound",
    item_size: "null",
    image_url: "/images/menu-items/tacos/golden-pound.jpg",
    unit_price: 5.3,
  },
];

let DRINK_SAMPLE_DATA: {
  category: string;
  description: string;
  item_name: string;
  item_size: string;
  image_url: string;
  unit_price: number;
}[] = [
  {
    category: "drink",
    description: "refreshing",
    item_name: "cola",
    item_size: "16 oz",
    image_url: "/images/menu-items/drinks/coke.jpg",
    unit_price: 1.0,
  },
  {
    category: "drink",
    description: "refreshing",
    item_name: "horchata",
    item_size: "s m l",
    image_url: "/images/menu-items/drinks/horchata.jpg",
    unit_price: 2.25,
  },
];
let SIDE_SAMPLE_DATA: {
  category: string;
  description: string;
  item_name: string;
  item_size: string;
  image_url: string;
  unit_price: number;
}[] = [
  {
    category: "side",
    description: "a wonderful addition",
    item_name: "elote",
    item_size: "NA",
    image_url: "/images/menu-items/sides/street-corn.jpg",
    unit_price: 1.0,
  },
  {
    category: "side",
    description: "a wonderful addition",
    item_name: "pico de gallo",
    item_size: "NA",
    image_url: "/images/menu-items/drinks/horchata.jpg",
    unit_price: 2.25,
  },
];
let TOPPING_SAMPLE_DATA: {
  category: string;
  description: string;
  item_name: string;
  item_size: string;
  image_url: string;
  unit_price: number;
}[] = [
  {
    category: "topping",
    description: "a little extra",
    item_name: "pickled jalepenos and onions",
    item_size: "NA",
    image_url: "/images/menu-items/toppings/pickled-jalepeno-and-onion.jpg",
    unit_price: 1.0,
  },
  {
    category: "topping",
    description: "a little extra",
    item_name: "lime",
    item_size: "NA",
    image_url: "/images/menu-items/toppings/limon.jpg",
    unit_price: 1.5,
  },
];
let SAMPLE_DATA: {}[] = [];

// api call

// ----------------------------------------------------
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
