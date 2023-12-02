import React, { useState, useRef, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const UserBlogPosting = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const isMounted = useRef(true); // Using useRef to keep track of component mount state

  const handlePostBlog = async () => {
    try {
      setError(null);

      // Check if the title and content are not empty
      if (!title || !content) {
        setError('Title and content cannot be empty');
        return;
      }

      // Add the blog post to the 'blogPosts' collection in Firestore
      const blogPostsCollection = collection(db, 'blogPosts');
      await addDoc(blogPostsCollection, { title, content });

      // Clear the form fields after successful posting
      setTitle('');
      setContent('');

      if (isMounted.current) {
        console.log('Blog post added successfully');
      }
    } catch (error) {
      if (isMounted.current) {
        setError('Error posting blog');
        console.error('Error posting blog:', error.message);
      }
    }
  };

  // UseEffect to update isMounted when the component mounts/unmounts
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <div>
      <h2>User Blog Posting</h2>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Content:</label>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handlePostBlog}>Post Blog</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default UserBlogPosting;
