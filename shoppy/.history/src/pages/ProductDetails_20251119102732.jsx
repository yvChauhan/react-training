import { useParams } from "react-router";

export default function ProductDetails() {
  const { productId } = useParams();
  const product = [];

  return (
    <div>
      {product ? (
        <>
          <h1>Product Details</h1>
          <h2>{product.name}</h2>
          <h2>Price : {product.price}</h2>
          <img
            src={product.img}
            alt={product.name}
            style={{ width: "150px" }}
          />
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}
