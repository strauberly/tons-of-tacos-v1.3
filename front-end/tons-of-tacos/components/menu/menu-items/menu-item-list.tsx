import MenuItem from "./menu-item";
import classes from "./menu-item-list.module.css";

export default async function MenuItemList(menuItems: {
  menuItems: MenuItem[];
}) {
  const items = menuItems.menuItems;
  await new Promise((resolve) => setTimeout(resolve, 1000));
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
