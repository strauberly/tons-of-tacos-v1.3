import MenuItem from "./menu-item";
import classes from "./menu-item-list.module.css";

export default function MenuItemList(props: { menuitems: any[] }) {
  return (
    <ul className={classes.grid}>
      {props.menuitems.map(
        (menuitem: {
          key: string;
          itemName: string;
          category: string;
          image_url: string;
          itemSize: string;
          unitPrice: number;
          description: string;
        }) => (
          <MenuItem
            key={menuitem.itemName}
            item_name={menuitem.itemName}
            category={menuitem.category}
            image_url={menuitem.image_url}
            item_size={menuitem.itemSize}
            unit_price={menuitem.unitPrice}
            description={menuitem.description}
          />
        )
      )}
    </ul>
  );
}
