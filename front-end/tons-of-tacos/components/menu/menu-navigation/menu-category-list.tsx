// "use client";
import { useEffect } from "react";
import MenuCategory from "./menu-category";
import getCategories from "@/lib/getCategories";

// const categoriesData: Promise<Category[]> = getCategories();
// const categories = await categoriesData;

export default function MenuCategories(props: { menuCategories: Category[] }) {
  // export default function MenuCategories(props: { menucategories: Category[] }) {

  // export default function MenuCategories(props: { menuCategories: Category[] }) {
  // const categoriesData: Promise<Category[]> = getCategories();
  // const categories = await categoriesData;

  // useEffect(() => {
  //   async function returnCategories() {
  //     const categoriesData: Promise<Category[]> = getCategories();
  //     const categories = await categoriesData;
  //   }
  //   returnCategories();
  // });
  return (
    <ul>
      {props.menuCategories.map((menucategory: { name: string }) => (
        <MenuCategory key={menucategory.name} name={menucategory.name} />
      ))}
    </ul>
  );
}
