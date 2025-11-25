import { Link, useLocation } from "react-router";
import { categories } from "../data/data";

function Home() {
  const location = useLocation();

  return (
    <div className="py-10 sm:py-16 md:py-20">
      <h1 className="mb-8 text-2xl font-semibold text-center text-slate-900">
        Categories
      </h1>
      <ul className="grid grid-cols-3 gap-4 px-5">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              className="relative flex flex-col items-center justify-center group"
              to={`/category/${category.id.toLowerCase()}`}
            >
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
