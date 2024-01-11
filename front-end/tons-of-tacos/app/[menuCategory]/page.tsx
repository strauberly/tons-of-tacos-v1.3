"use client";

import { notFound } from "next/navigation";
// import classes from "./";

// this will take the slug for menu items category and give the properties needed
// let TACO_DUMMY_DATA: {keys:types}[] = [];
// attempt interface in order to validate the object
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
    image_url: "TBD",
    unit_price: 2.25,
  },
  {
    category: "taco",
    description: "nom nom",
    item_name: "golden pound",
    item_size: "null",
    image_url: "TBD",
    unit_price: 5.3,
  },
];
let DRINK_SAMPLE_DATA: {}[] = [];
let SIDE_SAMPLE_DATA: {}[] = [];
let TOPPING_SAMPLE_DATA: {}[] = [];
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
      SAMPLE_DATA = TACO_SAMPLE_DATA;
      console.log(`category: ${category}`);
      break;
    case (category = "toppings"):
      SAMPLE_DATA = TACO_SAMPLE_DATA;
      console.log(`category: ${category}`);
      break;
    case (category = "drinks"):
      SAMPLE_DATA = TACO_SAMPLE_DATA;
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
      <section>{/* <MenuItemList /> */}</section>
    </main>
  );
}
