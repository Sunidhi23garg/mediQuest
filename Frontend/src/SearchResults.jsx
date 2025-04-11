import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchResults.css'; 

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('q');

  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`http://localhost:9000/search?q=${encodeURIComponent(searchTerm)}`);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (searchTerm) {
      fetchResults();
    }
  }, [searchTerm]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Search Results for: <em>{searchTerm}</em></h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {results.length > 0 ? (
          results.map((item, index) => (
            <div key={index} style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              width: '250px',
              boxShadow: '0 0 8px rgba(0,0,0,0.1)'
            }}>
              <h3>{item.name}</h3>
              <p><strong>Category:</strong> {item.category}</p>
              <p><strong>Price:</strong> ₹{item.price}</p>
              <p><strong>Pharmacy:</strong> {item.pharmacy.name}</p>
              <p><strong>Address:</strong> {item.pharmacy.address}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;