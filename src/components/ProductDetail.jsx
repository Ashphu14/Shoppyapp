import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(err => setError(err));
  }, [id]);

  if (error) {
    return <div>Error fetching product: {error.message}</div>;
  }

  return (
    product ? (
      <div className="product-detail">
        <img src={product.thumbnail} alt={product.title} />
        <div className="details">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p className="price">{product.price} USD</p>
        </div>
      </div>
    ) : (
      <div>Loading...</div>
    )
  );
};

export default ProductDetail;
