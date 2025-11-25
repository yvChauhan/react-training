import { Link, useLocation } from "react-router";
import { categories } from "../data/data";

function Home() {
  const location = useLocation();

  return (
    <div className="py-10 sm:py-16 md:py-20">
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
    </div>
  );
}

export default Home;
