"use client";

import classes from "./page.module.css";
import MenuItemList from "@/components/menu/menu-items/menu-item-list";
import { notFound } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";
import FadeOnLoad from "@/components/ui/animations/fade-on-load";
import { useMenuContext } from "@/context/menu-context";
import Loading from "../loading";
import { useMenuItemsForCategory } from "@/lib/menu";
import { useMenuCategoryContext } from "@/context/menu-category-context";

export default function MenuItemsByCategory({
  params,
}: {
  params: { menuCategory: string };
}) {
  const { setMenuItems } = useMenuContext();
  const { menuCategories } = useMenuCategoryContext();
  const menuItems = useRef<MenuItem[]>([]);
  const menuOptions: string[] = menuCategories.map(
    (cate: { name: string }) => cate.name
  );
  let category = params.menuCategory;

  if (!menuOptions.includes(category)) {
    notFound();
  }

  useEffect(() => {
    async function DisplayMenuItems() {
      menuItems.current = await useMenuItemsForCategory(category);
      setMenuItems(menuItems.current);
    }
    DisplayMenuItems();
  }, [category, menuCategories, setMenuItems]);

  // set menu category description
  let description: string | undefined = menuCategories
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
            <p className={classes.description}>{description}</p>
          </div>
          <div>{<MenuItemList menuItems={menuItems.current} />}</div>
        </FadeOnLoad>
      </Suspense>
    </main>
  );
}
