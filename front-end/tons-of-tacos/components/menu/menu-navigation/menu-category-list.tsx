import { useGlobalContext } from "@/context/store";
import MenuCategory from "./menu-category";

export default function MenuCategories(props: { menuCategories: Category[] }) {
  const { categories } = useGlobalContext();

  return (
    <>
      <ul>
        {categories.map((menucategory: { name: string }) => (
          <MenuCategory key={menucategory.name} name={menucategory.name} />
        ))}
      </ul>

      {/* <ul>
      {props.menuCategories.map((menucategory: { name: string }) => (
        <MenuCategory key={menucategory.name} name={menucategory.name} />
        ))}
    </ul> */}
    </>
  );
}
