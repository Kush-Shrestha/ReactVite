import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Shimmer from './Shimmer';

const Body = () => {
  const [topRatedProducts, setTopRatedProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchtext] = useState("");

  const changeText = (event) => {
    setSearchtext(event.target.value);
  };

  const searchProducts = () => {
    const filteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase()) ||
      product.description.toLowerCase().includes(searchText.toLowerCase())
    );
    setTopRatedProducts(filteredProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const data = await fetch("https://fakestoreapi.com/products");
      const json = await data.json();
      setAllProducts(json);
      setTopRatedProducts(json);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const topRatedProductsData = () => { 
    setIsLoading(true);
    const filteredProducts = allProducts.filter((product) => product.rating?.rate > 4);
    setTopRatedProducts(filteredProducts);
    setIsLoading(false);
  };

  const clearProducts = () => {
    setTopRatedProducts(allProducts);
    setSearchtext("");  
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Header Section */}
        <div className='mb-12 text-center'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4 tracking-tight'>Discover Amazing Products</h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>Find the best products made and customize just for you</p>
        </div>

        {/* Search and Filter Section */}
        <div className='flex flex-col sm:flex-row gap-6 items-center justify-between mb-12 bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl'>
          <div className='flex-1 max-w-xl w-full'>
            <div className='relative flex items-center gap-3'>
              <div className='flex-1 relative'>
                <input
                  type='text'
                  className='w-full px-5 py-4 pl-12 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm'
                  placeholder='Search products...'
                  value={searchText}
                  onChange={changeText}
                />
                <svg 
                  className="w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button 
                onClick={searchProducts}
                className='px-8 py-4 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
              >
                <span>Search</span>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          <div className='flex gap-3'>
            <button 
              className='px-8 py-4 text-sm font-semibold text-white bg-blue-600 rounded-xl cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
              onClick={topRatedProductsData}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              Top Rated
            </button>
            <button 
              className='px-8 py-4 text-sm font-semibold text-white bg-red-600 rounded-xl cursor-pointer hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
              onClick={clearProducts}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {isLoading ? (
            <Shimmer />
          ) : (
            topRatedProducts.map((product) => (
              <div key={product.id} className="transform transition-all duration-300 hover:-translate-y-2">
                <ProductCard
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  category={product.category}
                />
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Body;