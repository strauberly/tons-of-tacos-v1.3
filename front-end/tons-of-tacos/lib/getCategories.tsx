import useCategoriesSource from "./menuItemsByCategory";

const Categories = () => {
  const cat = useCategoriesSource() as unknown as Category[];
  return cat;
};

export default Categories;
