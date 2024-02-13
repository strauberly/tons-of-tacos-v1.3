import MenuItem from "./menu-item";
import classes from "./menu-item-list.module.css";

// possibly export to types and create a context for in here

export default async function MenuItemList(props: { menuItems: any[] }) {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <ul className={classes.grid}>
      {props.menuItems.map(
        (menuItem: {
          key: string;
          itemName: string;
          category: string;
          image_url: string;
          itemSize: string;
          unitPrice: number;
          description: string;
        }) => (
          <MenuItem
            key={menuItem.itemName}
            item_name={menuItem.itemName}
            category={menuItem.category}
            image_url={menuItem.image_url}
            item_size={menuItem.itemSize}
            unit_price={menuItem.unitPrice}
            description={menuItem.description}
          />
        )
      )}
    </ul>
  );
}
