import classes from "./page.module.css";
import MenuItemList from "@/components/menu/menu-items/menu-item-list";
import { Suspense } from "react";
import FadeOnLoad from "@/components/ui/animations/fade-on-load";
import Loading from "../loading";
import useCategoriesSource from "@/lib/menu";

export default async function MenuItemsByCategory({
  params,
}: {
  params: { menuCategory: string };
}) {
  let category = params.menuCategory;
  let categories = await useCategoriesSource();

  let description: string | undefined = categories
    .find(function (mc: { name: string }) {
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
          <MenuItemList category={category} />
        </FadeOnLoad>
      </Suspense>
    </main>
  );
}
