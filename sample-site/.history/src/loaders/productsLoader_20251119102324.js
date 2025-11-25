export default async function fetchProductsLoader() {
  const res = await fetch("http://localhost:9000/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await res.json();
  return products;
}
