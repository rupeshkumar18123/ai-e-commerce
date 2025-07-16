import React from 'react';

const ProductDetail = ({ product, onClose }) => {
  if (!product) return null;

return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
                <div className="flex justify-between items-start">
                    <h2 className="text-3xl font-bold">{product.title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">
                        &times;
                    </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
                            <img 
                                src={product.thumbnail} 
                                alt={product.title} 
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-2 mt-4">
                            {product.images?.slice(0,4).map((img, i) => (
                                <div key={i} className="border rounded p-1">
                                    <img src={img} alt="" className="h-16 object-contain w-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                        <p className="text-2xl font-semibold mb-4">${product.price}</p>
                        <p className="text-gray-700 mb-6">{product.description}</p>
                        
                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-2">Key Features:</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                {product.features?.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="flex space-x-4">
                            <button 
                                className="bg-indigo-600 text-white px-6 py-3 rounded-md flex-1"
                                onClick={() => {
                                    addToCart(product);
                                    onClose();
                                }}
                            >
                                Add to Cart
                            </button>
                            <button className="border border-gray-300 px-6 py-3 rounded-md">
                                Save for Later
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 pt-8 border-t">
                    <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
                    <div className="space-y-4">
                        {product.reviews?.map((review, i) => (
                            <div key={i} className="border-b pb-4">
                                <div className="flex items-center mb-2">
                                    <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                                        {review.user.charAt(0)}
                                    </div>
                                    <strong>{review.user}</strong>
                                    <span className="ml-4 bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                                        ⭐ {review.rating}
                                    </span>
                                </div>
                                <p>{review.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default ProductDetail;