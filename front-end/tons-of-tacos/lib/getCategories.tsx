export default async function getCategories() {
  const response = await fetch("http://localhost:8080/api/utility/categories");
  const data = await response.json();
  if (!response.ok) throw new Error("failed to get data");
  return data;
}
