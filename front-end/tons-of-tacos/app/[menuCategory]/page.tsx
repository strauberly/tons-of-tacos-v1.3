// "use client";

import classes from "./page.module.css";
import MenuItemList from "@/components/menu/menu-items/menu-item-list";
// import { notFound } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import FadeOnLoad from "@/components/ui/animations/fade-on-load";
// import { useMenuContext } from "@/context/menu-context";
import Loading from "../loading";
import useCategoriesSource, { MenuItems } from "@/lib/menu";
// import { useMenuCategoryContext } from "@/context/menu-category-context";

// const { menuCategories } = useMenuCategoryContext();
export default async function MenuItemsByCategory({
  params,
}: {
  params: { menuCategory: string };
}) {
  // const { setMenuItems } = useMenuContext();
  // const menuItems = useRef<MenuItem[]>([]);
  // const menuOptions: string[] = menuCategories.map(
  //   (category: { name: string }) => category.name
  // );
  let category = params.menuCategory;

  let cats = await useCategoriesSource();

  let description: string | undefined = cats
    .find(function (mc: { name: string }) {
      return mc.name === `${category}`;
    })
    ?.description.toString();

  // if (!menuOptions.includes(category)) {
  //   notFound();
  // }

  // const [, setError] = useState();

  // useEffect(() => {
  //   async function DisplayMenuItems() {
  //     try {
  //       menuItems.current = await MenuItems(category);
  //     } catch (error) {
  //       setError(() => {
  //         throw error;
  //       });
  //     }
  //     setMenuItems(menuItems.current);
  //   }
  //   DisplayMenuItems();
  // }, [category, menuCategories, setMenuItems]);

  // set menu category description
  // let description: string | undefined = menuCategories
  //   .find(function (mc) {
  //     return mc.name === `${category}`;
  //   })
  //   ?.description.toString();

  return (
    <main className={classes.main}>
      <Suspense fallback={<Loading />}>
        <FadeOnLoad>
          <div className={classes.category}>
            <h1>{category + ":"}</h1>
            <p className={classes.description}>{description}</p>
          </div>
          <MenuItemList category={category} />
        </FadeOnLoad>
      </Suspense>
    </main>
  );
}
