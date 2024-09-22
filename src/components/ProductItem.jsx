import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch action to add the product to the cart
  };

  return (
    <div className="product-item">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <div className="buttons">
        <Link to={`/product/${product.id}`}>View Details</Link>
        <button onClick={handleAddToCart}>Add to Cart</button> {/* Add to Cart button */}
      </div>
    </div>
  );
};

export default ProductItem;
