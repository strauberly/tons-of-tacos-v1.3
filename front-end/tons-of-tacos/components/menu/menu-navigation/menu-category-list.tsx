import { useGlobalContext } from "@/context/store";
import MenuCategory from "./menu-category";

// set categories here?

export default function MenuCategories() {
  const { categories, setShowMenu, showMenu } = useGlobalContext();

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
