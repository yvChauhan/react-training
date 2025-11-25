export default async function fetchCategoryLoader({ params, request }) {
  const res = await fetch("http://localhost:9000/categories");

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const categories = await res.json();
  return categories;
}
