import MenuItem from "./menu-item";
import classes from "./menu-item-list.module.css";
import { MenuItems } from "@/lib/menu";

export default async function MenuItemListCopy(itemsCategory: {
  category: string;
}) {
  const items = await MenuItems(itemsCategory.category);
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <ul className={classes.grid}>
      {items.map(
        (menuItem: {
          id: string;
          itemName: string;
          category: string;
          imageUrl: string;
          itemSize: string;
          unitPrice: number;
          description: string;
        }) => (
          <MenuItem
            key={`${menuItem.itemName}_${menuItem.itemSize}`}
            id={`${menuItem.id}`}
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
