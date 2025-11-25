import { Link } from "react-router";
import { categories } from "../data/data";

function Home() {
  return (
    <>
      <h1>Categories</h1>
      <ul style={{ display: "flex" }}>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id.toLowerCase()}`}>
              {category.name}
              <img src={category.img} alt={category.name} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
