import MenuItem from "./menu-item";
import classes from "./menu-item-list.module.css";

// possibly export to types and create a context for in here

export default async function MenuItemList(props: { menuItems: MenuItem[] }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // console.log(props.menuItems);
  return (
    <ul className={classes.grid}>
      {props.menuItems.map(
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
