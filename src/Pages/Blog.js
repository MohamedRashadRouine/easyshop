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

  // Static blog posts
  const staticBlogPosts = [
    {
      id: '1',
      title: 'The Art of Rifle Hunting',
      content: 'Discover the art of rifle hunting, from choosing the right rifle to tracking techniques and ethical hunting practices.',
    },
    {
      id: '2',
      title: 'Top Rifles for Big Game Hunting',
      content: 'Explore the top rifles for big game hunting, including their features, accuracy, and suitability for different hunting scenarios.',
    },
    {
      id: '3',
      title: 'Hunting Safety Tips with Firearms',
      content: 'Ensure your safety and the safety of others while hunting with firearms. Learn about essential safety tips and precautions.',
    },
    // Add more static posts as needed
  ];

  return (
    <div>
      <h1>Blog</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {/* Display static posts */}
      {staticBlogPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {/* Add more details as needed */}
        </div>
      ))}
      {/* Display Firestore posts */}
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
