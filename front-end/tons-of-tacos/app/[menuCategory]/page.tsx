"use client";

import MenuItemList from "@/components/menu/menuItems/menu-item-list";
import { notFound } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import classes from "./page.module.css";
import { useGlobalContext } from "@/context/store";
import { useMenuItemsForCategory } from "@/lib/menuItemsByCategory";
import FadeOnLoad from "@/components/ui/animations/fade-on-load";
import Image from "next/image";
import logoImg from "@/public/images/logos/bird-logo-rendersa.svg";
import logoRender from "@/public/images/logos/bird-logo-rendersb.svg";
import LoadingAnimation from "@/components/ui/animations/loading-animation";

// params and old params  -> possibly a context selection same menu category => on startup clear local storage for category and right current category right the name of the first item in the array to local storage

// old menu items and new menu items (how to compare value of the object is the same? if name or key in [0] same or not)

// clause for if the params are not the same re render otherwise use the same data

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
  //  categories are stored into local storage on header load and facilitates refresh
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
      <FadeOnLoad>
        <Suspense
          fallback={
            <>
              <Image
                src={logoImg}
                className={classes.loadImage}
                alt="tons of tacos logo"
              />
              <LoadingAnimation>
                <Image
                  src={logoRender}
                  className={classes.loadImage}
                  alt="tons of tacos loading animation"
                />
              </LoadingAnimation>
            </>
          }
        >
          <div className={classes.category}>
            <h1>{category + ":"}</h1>
            <p className={classes.title}>{description}</p>
          </div>
          <div>{<MenuItemList menuItems={menuItems} />}</div>
        </Suspense>
      </FadeOnLoad>
    </main>
  );
}
