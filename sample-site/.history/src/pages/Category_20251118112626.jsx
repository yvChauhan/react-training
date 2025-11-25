import { useParams } from "react-router";

function Category() {
  const { categoryId } = useParams();
  return (
    <>
      <h1>Category: {categoryId}</h1>
    </>
  );
}

export default Category;
