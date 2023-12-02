// UserProfile.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import UserBlogPosting from '../UserBlogPosting/UserBlogPosting'; // Import UserBlogPosting

const UserProfile = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p>Email: {user.email}</p>
          {user.displayName === 'admin' ? (
            <>
              <Link to='/AdminProductManagement'>Admin Product Management</Link>
              <br />
              <Link to='/AdminBlogManagement'>Admin Blog Management</Link>
            </>
          ) : (
            <>
              <UserBlogPosting /> {/* Include the UserBlogPosting component */}
            </>
          )}
        </div>
      ) : (
        <p>User not logged in</p>
      )}
    </div>
  );
};

export default UserProfile;
