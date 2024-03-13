"use client";

import classes from "./page.module.css";
import MenuItemList from "@/components/menu/menu-items/menu-item-list";
import { notFound } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";
import FadeOnLoad from "@/components/ui/animations/fade-on-load";
import { useMenuContext } from "@/context/menu-store";
import Loading from "../loading";
import { useMenuItemsForCategory } from "@/lib/menu";

export default function MenuItemsByCategory({
  params,
}: {
  params: { menuCategory: string };
}) {
  const { categories, setCategories, setMenuItems } = useMenuContext();

  let category = params.menuCategory;
  const menuItems = useRef<MenuItem[]>([]);

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
      menuItems.current = await useMenuItemsForCategory(category);
      setCategories(categories);
      setMenuItems(menuItems.current);
    }
    DisplayMenuItems();
  }, [category, setCategories, setMenuItems]);

  // set menu category description
  let description: string | undefined = categories
    .find(function (mc) {
      return mc.name === `${category}`;
    })
    ?.description.toString();

  return (
    <main className={classes.main}>
      <Suspense fallback={<Loading />}>
        <FadeOnLoad>
          <div className={classes.category}>
            <h1>{category + ":"}</h1>
            <p className={classes.title}>{description}</p>
          </div>
          <div>{<MenuItemList menuItems={menuItems.current} />}</div>
        </FadeOnLoad>
      </Suspense>
    </main>
  );
}
