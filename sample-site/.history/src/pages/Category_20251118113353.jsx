import { Link, useParams } from "react-router";
import { products } from "../data/data";

function Category() {
  const { categoryId } = useParams();

  const currentCategoryProducts = products.filter(
    (product) => product.categoryId.toLowerCase() === categoryId.toLowerCase()
  );

  return (
    <>
      <h1>Category: {categoryId}</h1>
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
