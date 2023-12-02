// AdminProductManagement.js
import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

const AdminProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const productsCollection = collection(db, 'products'); // Update with your actual collection name
        const productsSnapshot = await getDocs(productsCollection);
        const productsData = productsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);
      } catch (error) {
        setError('Error fetching products');
        console.error('Error fetching products:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleDeleteProduct = async (productId) => {
    try {
      const db = getFirestore();
      const productRef = doc(db, 'products', productId); // Update with your actual collection name
      await deleteDoc(productRef);
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      setError('Error deleting product');
      console.error('Error deleting product:', error.message);
    }
  };

  return (
    <div>
      <h1>Admin Product Management</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <button onClick={() => handleDeleteProduct(product.id)}>Delete Product</button>
        </div>
      ))}
    </div>
  );
};

export default AdminProductManagement;
