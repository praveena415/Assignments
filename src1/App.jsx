import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from './features/cartSlice';

const products = [
  { id: 1, name: 'Laptop', price: 50000 },
  { id: 2, name: 'Phone', price: 20000 },
  { id: 3, name: 'Headphones', price: 2000 },
];

export default function App() {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>🛒 Shopping Cart</h2>

      <h3>Products</h3>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: '10px' }}>
          {product.name} — ₹{product.price}
          <button 
            style={{ marginLeft: '10px' }} 
            onClick={() => dispatch(addItem(product))}
          >
            Add to Cart
          </button>
        </div>
      ))}

      <h3>Cart Items</h3>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        items.map(item => (
          <div key={item.id} style={{ marginBottom: '5px' }}>
            {item.name} — ₹{item.price}
            <button 
              style={{ marginLeft: '10px' }} 
              onClick={() => dispatch(removeItem(item.id))}
            >
              Remove
            </button>
          </div>
        ))
      )}

      <h3>Total Price: ₹{total}</h3>
    </div>
  );
}
