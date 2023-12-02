import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
// Import other necessary Firebase functions

const AdminBlogManagement = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const blogPostsCollection = collection(db, 'blogPosts'); // Update with your actual collection name
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

  const handleDeletePost = async (postId) => {
    try {
      const db = getFirestore();
      const postRef = doc(db, 'blogPosts', postId); // Update with your actual collection name
      await deleteDoc(postRef);
      setBlogPosts(blogPosts.filter((post) => post.id !== postId));
    } catch (error) {
      setError('Error deleting blog post');
      console.error('Error deleting blog post:', error.message);
    }
  };

  return (
    <div>
      <h1>Admin Blog Management</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {blogPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={() => handleDeletePost(post.id)}>Delete Post</button>
        </div>
      ))}
    </div>
  );
};

export default AdminBlogManagement;
