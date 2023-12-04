import React, { useState } from 'react'; 
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth'; 
import guns from '../Assets/guns.png';
import carticon from '../Assets/cart.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; 
import LanguageButton from '../LanguageButton/LanguageButton';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const user = auth.currentUser;
  const navigate = useNavigate(); 

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/'); // Redirect to the home page
        } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <div className='Navbar'>
      <div className="nav-logo">
        <img src={guns} alt="logo" id='img' />
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Clothing")}>
          <Link to='/Clothing' style={{ textDecoration: 'none' }}>Clothing</Link>
          {menu === "Clothing" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Guns")}>
          <Link to='/Guns' style={{ textDecoration: 'none' }}>Guns</Link>
          {menu === "Guns" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Contact")}>
          <Link to='/Contact' style={{ textDecoration: 'none' }}>Contact</Link>
          {menu === "Contact" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Aboutus")}>
          <Link to='/Aboutus' style={{ textDecoration: 'none' }}>About us</Link>
          {menu === "Aboutus" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Blog")}>
          <Link to='/Blog' style={{ textDecoration: 'none' }}>Blog</Link>
          {menu === "Blog" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("UserProfile")}>
          <Link to='/UserProfile' style={{ textDecoration: 'none' }}>User Profile</Link>
          {menu === "UserProfile" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        {user ? (
          <>
            <button onClick={handleLogout}>Logout</button>
            {/* Add logic to navigate to user profile or redirect to the home page */}
          </>
        ) : (
          <>
            <Link to='/Login'><button>Login</button></Link>
          </>
        )}
        <Link to='/Cart'><img src={carticon} alt="cart" /></Link>
        <div className="nav-cart-count">0</div>
        <LanguageButton />
      </div>
    </div>
  );
};

export default Navbar;
