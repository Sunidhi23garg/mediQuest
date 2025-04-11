import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '2rem', background: '#f9fafb', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888' }}>Cart is empty...</p>
      ) : (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {cartItems.map((item, index) => (
            <div key={index} style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '20px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <p><strong>{item.name}</strong></p>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                  <button onClick={() => decreaseQuantity(item.name)} style={qtyButton}>-</button>
                  <button onClick={() => increaseQuantity(item.name)} style={qtyButton}>+</button>
                  <button onClick={() => removeFromCart(item.name)} style={removeButton}>Remove</button>
                </div>
              </div>
              <div style={{ fontWeight: 'bold', fontSize: '16px' }}>
                ₹{item.price * item.quantity}
              </div>
            </div>
          ))}

          <h3 style={{ textAlign: 'right', color: '#111' }}>Total: ₹{total}</h3>
        </div>
      )}
    </div>
  );
}

const qtyButton = {
  padding: '6px 12px',
  backgroundColor: '#6366f1',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '16px',
  transition: 'background-color 0.2s ease'
};

const removeButton = {
  padding: '6px 12px',
  backgroundColor: '#ef4444',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '14px',
  transition: 'background-color 0.2s ease'
};

export default Cart;