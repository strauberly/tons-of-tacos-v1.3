"use client";

import { useGlobalContext } from "@/context/store";

export default function useCategorySource() {
  const { categories, setCategories } = useGlobalContext();

  fetch("http://localhost:8080/api/utility/categories", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setCategories(data);
    });
  console.log(categories);
  return categories;
}
