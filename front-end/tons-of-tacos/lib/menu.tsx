// import error from "next/error";

export default async function useCategoriesSource() {
  const response = await fetch("http://localhost:8080/api/utility/categories");
  const data = await response.json();
  return data;
}

export async function useMenuItemsForCategory(category: string) {
  const response = await fetch(
    `http://localhost:8080/api/menu/category?category=${category}`
  );
  const data = await response.json();
  return data;
}
