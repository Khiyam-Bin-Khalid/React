import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const url = `/api/products${search ? `?search=${encodeURIComponent(search)}` : ''}`;
        const response = await axios.get(url);
        setProducts(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.error('API Error:', err);
        setError(err.message || 'Failed to fetch products');
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [search]);

  if (loading) {
    return (
      <div className="App">
        <h1>Frontend + Backend + API Handling</h1>
        <div className="loading">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <h1>Frontend + Backend + API Handling</h1>
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Frontend + Backend + API Handling</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="products">
        {products.length === 0 ? (
          <p>No products found{search ? ` for "${search}"` : ''}.</p>
        ) : (
          products.map((product) => (
            <div key={product.id || product._id} className="product">
              <h3>{product.name || 'Unnamed'}</h3>
              {product.description && <p>{product.description}</p>}
              {product.price && <p className="price">${product.price}</p>}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;

