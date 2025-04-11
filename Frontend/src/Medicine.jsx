import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Medicine.css';

const Medicine = () => {
  const navigate = useNavigate();

  const handleNavigate = (category) => {
    navigate(`/${category}`);
  };

  return (
    <div className="bigb">
      <div className="product-card">
        <div className="product-image">
          <img src="/6.png" alt="HandSanitizer" />
        </div>
        <div className="product-info">
          <h3>HandSanitizer</h3>
          <div className="product-buttons">
            <button className="add-to-cart" onClick={() => handleNavigate("HandSanitizer")}>
              Know More...
            </button>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img src="/7.png" alt="Shampoo&Conditioner" />
        </div>
        <div className="product-info">
          <h3>Shampoo&Conditioner</h3>
          <div className="product-buttons">
            <button className="add-to-cart" onClick={() => handleNavigate("ShampooAndConditioner")}>
              Know More...
            </button>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img src="/8.png" alt="AntiBacterialSoap" />
        </div>
        <div className="product-info">
          <h3>AntiBacterialSoap</h3>
          <div className="product-buttons">
            <button className="add-to-cart" onClick={() => handleNavigate("AntiBacterialSoap")}>
              Know More...
            </button>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img src="/9.png" alt="BodyLotion" />
        </div>
        <div className="product-info">
          <h3>BodyLotion</h3>
          <div className="product-buttons">
            <button className="add-to-cart" onClick={() => handleNavigate("BodyLotion")}>
              Know More...
            </button>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img src="/10.png" alt="Medicines" />
        </div>
        <div className="product-info">
          <h3>Medicines</h3>
          <div className="product-buttons">
            <button className="add-to-cart" onClick={() => handleNavigate("Medicines")}>
              Know More...
            </button>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img src="/11.png" alt="VitaminD3Tablets" />
        </div>
        <div className="product-info">
          <h3>VitaminD3Tablets</h3>
          <div className="product-buttons">
            <button className="add-to-cart" onClick={() => handleNavigate("VitaminD3Tablets")}>
              Know More...
            </button>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img src="/12.png" alt="ImmunityPills" />
        </div>
        <div className="product-info">
          <h3>ImmunityPills</h3>
          <div className="product-buttons">
            <button className="add-to-cart" onClick={() => handleNavigate("ImmunityPills")}>
              Know More...
            </button>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img src="/13.png" alt="FirstAidKit" />
        </div>
        <div className="product-info">
          <h3>FirstAidKit</h3>
          <div className="product-buttons">
            <button className="add-to-cart" onClick={() => handleNavigate("FirstAidKit")}>
              Know More...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicine;