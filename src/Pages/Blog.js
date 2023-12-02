// Blog.js
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const blogPostsCollection = collection(db, 'blogPosts');
        const blogPostsSnapshot = await getDocs(blogPostsCollection);
        const posts = blogPostsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setBlogPosts(posts);
      } catch (error) {
        setError('Error fetching blog posts');
        console.error('Error fetching blog posts:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {blogPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default Blog;
