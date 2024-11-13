// "use client";

import classes from "./main-header.module.css";
import Link from "next/link";
import useCategoriesSource from "@/lib/menu";
import NavButtons from "@/components/ui/buttons/nav-buttons/nav-buttons";
import { use, useEffect, useRef } from "react";

// export default function MainHeader() {
//   let categories;
//   // const menuOptions = categories;

//   const menuOptions = useRef<Category[]>([]);

//   // const menuOptions = categories;

//   useEffect(() => {
//     async function CheckConnection() {
//       try {
//         menuOptions.current = await useCategoriesSource();
//       } catch (error) {
//         console.log(error);
//         throw error;
//       }
//     }
//     CheckConnection();
//   });

//   return (
//     <>
//       <div className={classes.headerAlignment}>
//         <header className={classes.header}>
//           <Link className={classes.home} href="/">
//             Tons Of Tacos
//           </Link>
//           <NavButtons menuOptions={menuOptions.current} />
//         </header>
//       </div>
//     </>
//   );
// }

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
