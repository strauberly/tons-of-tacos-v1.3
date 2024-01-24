export default async function getCategories() {
  const response = await fetch("http://localhost:8080/api/utility/categories");
  if (!response.ok) throw new Error("failed to get data");
  return response.json();
}
