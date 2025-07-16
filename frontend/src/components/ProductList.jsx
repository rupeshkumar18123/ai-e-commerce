import React, { useState, useEffect } from 'react';
import ProductDetail from './ProductDetail';
import { searchGoogleProducts } from '../services/api';

const ProductList = ({ summary, onBack }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const googleProducts = await searchGoogleProducts(summary);
        setProducts(googleProducts);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [summary]);

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto text-center py-10">
        <p>Finding best products for you...</p>
        <div className="mt-4 w-12 h-12 border-t-2 border-indigo-600 rounded-full animate-spin mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6 flex justify-between items-start">
        <button 
          onClick={onBack}
          className="flex items-center text-indigo-600 hover:text-indigo-800"
        >
          &larr; Back to search
        </button>
        <div className="p-4 bg-blue-50 rounded-lg max-w-2xl">
          <h3 className="font-semibold text-blue-800">AI Summary:</h3>
          <p>{summary}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div 
              className="h-48 bg-gray-200 flex items-center justify-center cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <img 
                src={product.thumbnail} 
                alt={product.title} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">{product.title}</h3>
              <p className="text-gray-700 mb-2">${product.price}</p>
              
              {/* LLM-generated description */}
              <div className="bg-gray-50 p-3 rounded mb-4">
                <p className="text-sm text-gray-600 italic">
                  "{product.llmDescription || 'This product matches your needs because...'}"
                </p>
              </div>
              
              {/* Pros */}
              <div className="mb-4">
                <h4 className="font-medium text-indigo-600 mb-1">Key Benefits:</h4>
                <ul className="list-disc pl-5 text-sm">
                  {product.pros?.slice(0, 3).map((pro, i) => (
                    <li key={i} className="text-gray-700">{pro}</li>
                  ))}
                </ul>
              </div>
              
              {/* Reviews */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs mr-2">
                    ⭐ {product.rating || '4.5'}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {product.reviews?.length || '100+'} reviews
                  </span>
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductList;