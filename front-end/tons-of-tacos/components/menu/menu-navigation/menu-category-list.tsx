import { useGlobalContext } from "@/context/store";
import MenuCategory from "./menu-category";

export default function MenuCategories() {
  // map each category name to list item for links and dynamic nav
  const { categories } = useGlobalContext();

  return (
    <>
      <ul>
        {categories.map((menuCategory: { name: string }) => (
          <MenuCategory key={menuCategory.name} name={menuCategory.name} />
        ))}
      </ul>
    </>
  );
}
