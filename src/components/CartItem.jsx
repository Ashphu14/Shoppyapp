import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice'; // Import the removeFromCart action

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <img src={item.image} alt={item.title} style={{ width: '100px', height: 'auto' }} />
      <h3>{item.title}</h3>
      <p>{item.price} USD</p>
      <p>Quantity: {item.quantity}</p> {/* Show quantity if applicable */}
      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button> {/* Remove button */}
    </div>
  );
};

export default CartItem;
