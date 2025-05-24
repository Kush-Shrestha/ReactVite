import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Products = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [productData, setProductData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!data.ok) {
                    throw new Error('Product not found');
                }
                const json = await data.json();
                setProductData(json);
            } catch (error) {
                setError(error.message);
                console.error("Error fetching products:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [id]);

    if (isLoading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <Shimmer />
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
                <p className="text-gray-600">{error}</p>
            </div>
        );
    }

    if (!productData) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <h2 className="text-2xl font-bold text-gray-600">No product found</h2>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <img 
                        src={productData.image} 
                        alt={productData.title}
                        className="w-full h-auto object-contain max-h-[500px]"
                    />
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">{productData.title}</h1>
                    <p className="text-gray-600 mb-4">{productData.description}</p>
                    <div className="flex items-center mb-4">
                        <span className="text-2xl font-bold text-green-600">${productData.price}</span>
                        <span className="ml-4 text-yellow-500">
                            {productData.rating?.rate} ⭐ ({productData.rating?.count} reviews)
                        </span>
                    </div>
                    <div className="mb-4">
                        <span className="text-sm text-gray-500">Category: {productData.category}</span>
                    </div>
                    <button 
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        onClick={() => {
                            // Add to cart functionality can be implemented here
                            alert('Added to cart!');
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Products;
