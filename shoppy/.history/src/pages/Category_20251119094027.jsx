import { Link, useLocation, useParams, useSearchParams } from "react-router";
import { products } from "../data/data";

function Category() {
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  console.log("searchParams:", searchParams.get("maxPrice"));

  const maxPrice = location.state?.maxPrice;

  console.log("maxPrice:", maxPrice);

  const filterCost = maxPrice || searchParams.get("maxPrice");
  const currentCategoryProducts = products.filter(
    (product) =>
      product.categoryId.toLowerCase() === categoryId.toLowerCase() &&
      product.price <= (filterCost || Infinity)
  );

  function handleChange(e) {
    const value = e.target.value;
    setSearchParams(value ? { maxPrice: value } : {});
  }

  return (
    <div className="px-6 py-10">
      <h1 className="mb-6 text-3xl font-semibold text-center">
        Category: {categoryId}
      </h1>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-700"
          htmlFor="maxPrice"
        >
          Max Price:{" "}
        </label>
        <input
          className="block w-full px-3 py-2 placeholder-gray-400 border-gray-300 rounded-md focus:outline-none focus:ring-blue-50 focus:border-blue-500"
          type="number"
          id="maxPrice"
          placeholder="Enter max Price"
          value={searchParams.get("maxPrice") || ""}
          onChange={handleChange}
        />
      </div>
      <ul>
        {currentCategoryProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.name}
              <br />
              <img
                src={product.img}
                alt={product.name}
                style={{ width: "150px" }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
