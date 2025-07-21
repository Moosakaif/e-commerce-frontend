'use client';
import { useEffect, useState } from 'react';

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border p-4 shadow rounded">
            <img src={product.img} alt={product.title} className="w-full h-48 object-cover mb-2" />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-600">{product.desc}</p>
            <p className="text-xl font-bold text-green-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
