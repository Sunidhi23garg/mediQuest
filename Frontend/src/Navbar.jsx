import React, { useContext, useState } from 'react'
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { CartContext } from './CartContext'

const Navbar = () => {

    const { cartItems } = useContext(CartContext);

    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const handleSearch = (e) => {
        if (e.key === 'Enter' && search.trim() !== '') {
          navigate(`/search?q=${encodeURIComponent(search.trim())}`);
          setSearch('');
        }
      };


  return (
    <>
        <div className='one'>

            <div className='three'>
                <NavLink to="/home">
                    <img src="Logo.png" alt="Logo"/>
                    <img src="Name.png" alt="MediQuest" />
                </NavLink>
            </div>
            <div className='two'>
                <NavLink to="/home" className="nav-button">Home</NavLink>
                <NavLink to="/login" className="nav-button">Login</NavLink>
                <NavLink to="/medicine" className="nav-button">Medicine</NavLink>
                <NavLink to="/contact" className="nav-button">Contact Us</NavLink>
                <NavLink to="/about" className="nav-button">About Us</NavLink>
            </div>
            <div className='four'>

                <input type="text" placeholder="Search..." className="search-bar" value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleSearch} />
                
                <NavLink to="/cart" className="cart-icon">
                    <img src="cart.png" alt="Cart" />
                    {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                </NavLink>
            </div>


            
        </div>
    </>
  )
}

export default Navbar