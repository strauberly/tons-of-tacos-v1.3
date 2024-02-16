export default async function useCategoriesSource() {
  const response = await fetch("http://localhost:8080/api/utility/categories");
  const data = await response.json();
  if (!response.ok) throw new Error("failed to get data");
  if (typeof localStorage !== "undefined") {
    // localStorage.clear();
    localStorage.setItem("categories", JSON.stringify(data));
  }
  return data;
}

export async function useMenuItemsForCategory(category: string) {
  const response = await fetch(
    `http://localhost:8080/api/menu/category?category=${category}`
  );
  const data = await response.json();
  if (!response.ok) throw new Error("failed to get data");
  return data;
}
