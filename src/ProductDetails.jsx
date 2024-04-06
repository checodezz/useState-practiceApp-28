import { useState } from "react";

const ProductDetails = ({ smartphoneObj }) => {
  const [details, setDetails] = useState(false);
  const { productName, description, price } = smartphoneObj;
  return (
    <div>
      <h2>Product Details</h2>
      <p>
        <strong>Product Name:</strong>{" "}
        {productName.charAt(0).toUpperCase() + productName.slice(1)}
      </p>
      {!details && (
        <button onClick={() => setDetails(true)}>Show Details</button>
      )}
      {details && (
        <div>
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Price:</strong> ${price}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
