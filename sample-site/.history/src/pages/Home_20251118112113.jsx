import { categories } from "../data/data";

function Home() {
  return (
    <>
      <h1>Categories</h1>
      <ul>
        {" "}
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}
            <img src={category.img} alt={category.name} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
