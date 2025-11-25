import { useParams } from "react-router";

function Category() {

function Category() {

    const { categoryId } = useParams();
  return (
    <>
      <h1>Category</h1>
    </>
  );
}

export default Category;
