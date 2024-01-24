import MenuCategory from "./menu-category";

export default function MenuCategories(props: { menuCategories: Category[] }) {
  return (
    <ul>
      {props.menuCategories.map((menucategory: { name: string }) => (
        <MenuCategory key={menucategory.name} name={menucategory.name} />
      ))}
    </ul>
  );
}
