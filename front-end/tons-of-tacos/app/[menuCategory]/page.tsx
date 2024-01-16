"use client";

import MenuItemList from "@/components/menu/menuItems/menu-item-list";

import { notFound } from "next/navigation";
// import classes from "./";

// this will take the slug for menu items category and give the properties needed
// let TACO_DUMMY_DATA: {keys:types}[] = [];
// attempt interface in order to validate the object
// need id as key
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

export default function MenuItemsByCategory({
  params,
}: {
  params: { menuCategory: string };
}) {
  const tacos = "tacos";
  const sides = "sides";
  const toppings = "toppings";
  const drinks = "drinks";

  let category = params.menuCategory;
  // const categoryToDisplay: string = "";

  // console.log(`category: ${category}`);

  if (![tacos, sides, toppings, drinks].includes(category)) {
    notFound();
  }

  switch (category) {
    case (category = "tacos"):
      SAMPLE_DATA = TACO_SAMPLE_DATA;
      console.log(`category: ${category}`);
      break;
    case (category = "sides"):
      SAMPLE_DATA = SIDE_SAMPLE_DATA;
      console.log(`category: ${category}`);
      break;
    case (category = "toppings"):
      SAMPLE_DATA = TOPPING_SAMPLE_DATA;
      console.log(`category: ${category}`);
      break;
    case (category = "drinks"):
      SAMPLE_DATA = DRINK_SAMPLE_DATA;
      console.log(`category: ${category}`);
      break;
  }

  let categoryToDisplay =
    category.charAt(0).toLocaleUpperCase() +
    category.substring(1, category.length);
  console.log(categoryToDisplay);

  return (
    <main>
      <h1>{categoryToDisplay}</h1>
      <p>A nice description about this menu category</p>
      <section>{<MenuItemList menuitems={SAMPLE_DATA} />}</section>
    </main>
    // <main>
    //   <h1>{categoryToDisplay}</h1>
    //   <p>A nice description about this menu category</p>
    //   <section>{<MenuItemList menuitems={/*Data Set*/} />}</section>
    // </main>
  );
}