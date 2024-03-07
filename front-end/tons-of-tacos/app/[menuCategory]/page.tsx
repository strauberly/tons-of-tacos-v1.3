"use client";

import classes from "./page.module.css";
import MenuItemList from "@/components/menu/menuItems/menu-item-list";
import { notFound } from "next/navigation";
import { Suspense, useEffect } from "react";
import FadeOnLoad from "@/components/ui/animations/fade-on-load";
import { useMenuContext } from "@/context/menu-store";
import Loading from "../loading";

export default function MenuItemsByCategory({
  params,
}: {
  params: { menuCategory: string };
}) {
  const { categories, setCategories, setMenuItems } = useMenuContext();

  // desired category captured from params
  let category = params.menuCategory;

  // set menu category description
  let description: string | undefined = categories
    .find(function (mc) {
      return mc.name === `${category}`;
    })
    ?.description.toString();

  useEffect(() => {
    async function DisplayMenuItems() {
      const categories: Category[] = JSON.parse(
        sessionStorage.getItem("categories") || "{}"
      );

      const menuOptions: string[] = categories.map(
        (cat: { name: string }) => cat.name
      );
      // pseudo validation
      if (!menuOptions.includes(category)) {
        notFound();
      }

      setCategories(categories);
    }
    DisplayMenuItems();
  }, [category, setCategories, setMenuItems]);

  return (
    <main className={classes.main}>
      <Suspense fallback={<Loading />}>
        <FadeOnLoad>
          <div className={classes.category}>
            <h1>{category + ":"}</h1>
            <p className={classes.title}>{description}</p>
          </div>
          <div>{<MenuItemList category={category} />}</div>
        </FadeOnLoad>
      </Suspense>
    </main>
  );
}
