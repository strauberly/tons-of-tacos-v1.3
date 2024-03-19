import classes from "./main-header.module.css";
import Link from "next/link";
import useCategoriesSource from "@/lib/menu";
import NavButtons from "@/components/ui/buttons/nav-buttons/nav-buttons";

export default async function MainHeader() {
  const categories = await useCategoriesSource();
  const menuOptions = categories;

  return (
    <div className={classes.headerDiv}>
      <header className={classes.header}>
        <Link className={classes.home} href="/">
          Tons Of Tacos
        </Link>
        <NavButtons menuOptions={menuOptions} />
      </header>
    </div>
  );
}
