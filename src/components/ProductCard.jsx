import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const ProductCard = ({ title, image, description, price, category }) => {
    return (
        <div className='relative flex flex-col gap-4 px-3 pt-3 pb-5 border-2 border-slate-200 w-72 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group overflow-hidden'>
            <div className='absolute top-3 right-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10'>
                ${price}
            </div>
            <div className='absolute top-3 left-3 bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full z-10'>
                {category}
            </div>
            <div className='w-full h-48 flex items-center justify-center overflow-hidden rounded-xl bg-gray-50'>
                <img
                    src={image}
                    alt={title}
                    className='object-contain w-full h-full transition-transform duration-300 group-hover:scale-105'
                />
            </div>
            <h2 className='text-lg font-semibold text-gray-900 mt-2 truncate' title={title}>
                {title}
            </h2>
            <p className='text-gray-600 text-sm line-clamp-2 min-h-[2.5em]'>{description}</p>
            <button className='flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200'>
                <FaCartPlus className="w-5 h-5" />
                Add to cart
            </button>
        </div>
    );
};

export default ProductCard;