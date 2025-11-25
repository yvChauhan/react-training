import { Link, useLocation } from "react-router";
import { categories } from "../data/data";

function Home() {
  const location = useLocation();
  console.log("location:", location);
  return (
    <>
      <Link
        to="/category/electronics"
        state={{ from: location.pathname, maxPrice: 600 }}
      >
        Budget Friendly
      </Link>
      <h1>Categories</h1>
      <ul style={{ display: "flex" }}>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id.toLowerCase()}`}>
              {category.name}
              <img
                src={category.img}
                alt={category.name}
                style={{ width: "150px" }}
              />
            </Link>
          </li>
        ))}
      </ul>
      <p>Current location: {location.pathname}</p>
    </>
  );
}

export default Home;
