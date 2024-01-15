import MenuItem from "./menu-item";

export default function MenuItemList(props: { menuitems: [] }) {
  return (
    // apply rules of pricing exceptions here menu item cases

    <ul>
      {props.menuitems.map(
        (menuitem: {
          item_name: string;
          image_url: string;
          item_size: string;
          unit_price: number;
          description: string;
        }) => (
          <MenuItem
            key={menuitem.item_name}
            item_name={menuitem.item_name}
            image_url={menuitem.image_url}
            item_size={menuitem.item_size}
            unit_price={menuitem.unit_price}
            description={menuitem.description}
          />
        )
      )}
    </ul>
  );
}
