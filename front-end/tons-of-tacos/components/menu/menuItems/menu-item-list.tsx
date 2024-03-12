import { useMenuItemsForCategory } from "@/lib/menu";
import MenuItem from "./menu-item";
import classes from "./menu-item-list.module.css";
import { useEffect, useRef } from "react";

export default function MenuItemList(menuItems: { menuItems: MenuItem[] }) {
  const items = menuItems.menuItems;

  return (
    <ul className={classes.grid}>
      {items.map(
        (menuItem: {
          itemName: string;
          category: string;
          imageUrl: string;
          itemSize: string;
          unitPrice: number;
          description: string;
        }) => (
          <MenuItem
            key={menuItem.itemName}
            itemName={menuItem.itemName}
            category={menuItem.category}
            imageUrl={menuItem.imageUrl}
            itemSize={menuItem.itemSize}
            unitPrice={menuItem.unitPrice}
            description={menuItem.description}
          />
        )
      )}
    </ul>
  );
}
