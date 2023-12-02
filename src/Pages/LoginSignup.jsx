import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import RegistrationForm from '../Components/RegistrationForm/RegistrationForm';

const LoginSignup = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleLogin = async () => {
    try {
      setError(null);
      await signInWithEmailAndPassword(auth, email, password);
      // Add logic to navigate to user profile or redirect to the home page
      console.log('User logged in');
    } catch (error) {
      setError(error.message);
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div>
      <h1>{isLoginForm ? 'Login' : 'Register'}</h1>
      {isLoginForm ? (
        <div>
          {/* Login form elements */}
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <RegistrationForm />
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p onClick={toggleForm}>{isLoginForm ? 'Register' : 'Login'}</p>
    </div>
  );
};

export default LoginSignup;
