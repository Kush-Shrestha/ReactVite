import React, { useState, useEffect } from 'react';
import './Body.css';

const Body = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
        <button onClick={fetchProducts} className="retry-button">Retry</button>
      </div>
    );
  }

  return (
    <div className="body-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to King's Store</h1>
          <p>Discover Luxury, Embrace Style</p>
          <a href="/products" className="cta-button">Shop Now</a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title.length > 50 ? `${product.title.substring(0, 50)}...` : product.title}</h3>
              <p className="price">${product.price}</p>
              <div className="product-rating">
                <span className="rating">★ {product.rating.rate}</span>
                <span className="reviews">({product.rating.count} reviews)</span>
              </div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Section */}
      <section className="promo-section">
        <div className="promo-content">
          <h2>Special Offer</h2>
          <p>Get 20% off on your first purchase</p>
          <a href="/products" className="promo-button">Shop Now</a>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          <a href="/category/electronics" className="category-card">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Electronics" />
            <h3>Electronics</h3>
          </a>
          <a href="/category/fashion" className="category-card">
            <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Fashion" />
            <h3>Fashion</h3>
          </a>
          <a href="/category/accessories" className="category-card">
            <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Accessories" />
            <h3>Accessories</h3>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Body;