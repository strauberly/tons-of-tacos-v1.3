import classes from "./main-header.module.css";
import Link from "next/link";
import useCategoriesSource from "@/lib/menu";
import NavButtons from "@/components/ui/buttons/nav-buttons/nav-buttons";

export default async function MainHeader() {
  let categories;

  try {
    categories = await useCategoriesSource();
  } catch (error) {
    throw new Error("We can't take online orders right now");
  }
  const menuOptions = categories;

  return (
    <>
      <div className={classes.headerAlignment}>
        <header className={classes.header}>
          <Link className={classes.home} href="/">
            Tons Of Tacos
          </Link>
          <NavButtons menuOptions={menuOptions} />
        </header>
      </div>
    </>
  );
}
