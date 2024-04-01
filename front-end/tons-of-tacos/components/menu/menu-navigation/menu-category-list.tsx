import { useNavContext } from "@/context/nav-context";
import MenuCategory from "./menu-category";

export default function MenuCategories() {
  const { menuNavCategories } = useNavContext();

  return (
    <>
      <ul>
        {menuNavCategories.map((menuCategory: { name: string }) => (
          <MenuCategory key={menuCategory.name} name={menuCategory.name} />
        ))}
      </ul>
    </>
  );
}
