// App.js
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Clothing from './Pages/Clothing';
import Guns from './Pages/Guns';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Aboutus from './Pages/Aboutus';
import Footer from './Components/Footer/Footer';
import AdminBlogManagement from './Components/AdminBlogManagement/AdminBlogManagement';
import AdminProductManagement from './Components/AdminProductManagement/AdminProductManagement';
import UserProfile from './Components/UserProfile/UserProfile';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import Cart from './Pages/Cart';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/Register' element={<RegistrationForm />} />
          <Route path='/UserProfile' element={<UserProfile />} />
          <Route path='/' element={<Shop />} />
          <Route path='/Clothing' element={<Clothing />} />
          <Route path='/Guns' element={<Guns />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/AboutUs' element={<Aboutus />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/ProductId' element={<Product />} />
          <Route
            path='/Login'
            element={
              user ? (
                // If user is logged in, redirect to admin/blog
                <Navigate to='/admin/blog' />
              ) : (
                // If user is not logged in, show LoginSignup component
                <LoginSignup />
              )
            }
          />
          <Route path='/Cart' element={<Cart />} />
          {user ? (
            <>
              <Route path='/admin/blog' element={<AdminBlogManagement />} />
              <Route path='/admin/products' element={<AdminProductManagement />} />
              <Route path='/user/profile' element={<UserProfile />} />
            </>
          ) : (
            // If user is not logged in, redirect to Login
            <Route
              path='*'
              element={
                // Use the Navigate component
                <Navigate to='/Login' />
              }
            />
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
