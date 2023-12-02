// RegistrationForm.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is user
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegistration = async () => {
    try {
      setError(null);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Set user role in the user profile
      await updateProfile(user, { displayName: role });

      console.log('User registered:', user);

      // Add logic to navigate to user profile or redirect to the home page
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <label>
        Role:
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </label>
      <button onClick={handleRegistration}>Register</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default RegistrationForm;
