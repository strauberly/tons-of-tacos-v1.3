import { useGlobalContext } from "@/context/store";
import MenuCategory from "./menu-category";

export default function MenuCategories() {
  const { categories } = useGlobalContext();

  return (
    <>
      <ul on>
        {categories.map((menuCategory: { name: string }) => (
          <MenuCategory key={menuCategory.name} name={menuCategory.name} />
        ))}
      </ul>
    </>
  );
}
