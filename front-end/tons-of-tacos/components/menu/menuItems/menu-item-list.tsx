import MenuItem from "./menu-item";
import classes from "./menu-item-list.module.css";

// export default function MenuItemList(props: { menuitems: [] }) {

export default function MenuItemList(props: { menuitems: any[] }) {
  return (
    // apply rules of pricing exceptions here menu item cases

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
            // image_url={`/images/menu-items/${menuitem.category}/${menuitem.itemName}.jpg`}
            item_size={menuitem.itemSize}
            unit_price={menuitem.unitPrice}
            description={menuitem.description}
          />
        )
      )}
    </ul>

    // <ul>
    //   {props.menuitems.map(
    //     (menuitem: {
    //       key: string;
    //       item_name: string;
    //       image_url: string;
    //       item_size: string;
    //       unit_price: number;
    //       description: string;
    //     }) => (
    //       <MenuItem
    //         key={menuitem.item_name}
    //         item_name={menuitem.item_name}
    //         image_url={menuitem.image_url}
    //         item_size={menuitem.item_size}
    //         unit_price={menuitem.unit_price}
    //         description={menuitem.description}
    //       />
    //     )
    //   )}
    // </ul>
  );
}
