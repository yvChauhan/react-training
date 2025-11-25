import { Link, useLocation, useParams, useSearchParams } from "react-router";
import { products } from "../data/data";

function Category() {
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  console.log("searchParams:", searchParams.get("maxPrice"));

  const maxPrice = location.state?.maxPrice;

  console.log("maxPrice:", maxPrice);

  const currentCategoryProducts = products.filter(
    (product) =>
      product.categoryId.toLowerCase() === categoryId.toLowerCase() &&
      product.price <= (searchParams.get("maxPrice") || Infinity)
  );

  function handleChange(e) {
    const value = e.target.value;
    setSearchParams(value ? { maxPrice: value } : {});
  }

  return (
    <>
      <h1>Category: {categoryId}</h1>
      <div>
        <label>Max Price Filter: </label>
        <input
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
    </>
  );
}

export default Category;
