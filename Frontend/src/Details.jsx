import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from './CartContext';
import { toast } from 'react-toastify';


function Details() {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const { addToCart } = useContext(CartContext);
  const isLoggedIn = !!localStorage.getItem('token');

  useEffect(() => {
    axios.get(`http://localhost:9000/getByCategory/${category}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [category]);

  return (
    <div style={{ padding: '2rem', background: 'rgb(244, 228, 249)', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
        {category}
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
      }}>
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div style={{ marginBottom: '15px' }}>
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Category:</strong> {item.category}</p>
                <p><strong>Price:</strong> ₹{item.price}</p>
                <p><strong>Pharmacy:</strong> {item.pharmacy.name}</p>
                <p><strong>Address:</strong> {item.pharmacy.address}</p>
              </div>

              {isLoggedIn ? (
                <button
                  onClick={() => {
                    addToCart(item);
                    toast.success(`${item.name} added to cart!`);
                  }}
                  style={{
                    padding: '10px',
                    backgroundColor: '#4f46e5',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4338ca'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4f46e5'}
                >
                  Add to Cart
                </button>

              ) : (
                <p style={{
                  color: 'red',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}>
                  Please login to add items to cart.
                </p>
              )}
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#777' }}>
            Loading or no data found...
          </p>
        )}
      </div>
    </div>
  );
}

export default Details;