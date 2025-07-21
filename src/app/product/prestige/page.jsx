'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import CommentsForm from '@/components/CommentsForm';

export default function PrestigeProductPage() {
  const [product, setProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/products/14390');
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error('Failed to load product:', error);
      }
    };
    fetchProduct();
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault();

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const newItem = {
      id: 14395, // Unique product ID
      title: 'Prestige',
      price: 24.99,
      quantity: 1,
    };

    const existingIndex = cart.findIndex((item) => item.id === newItem.id);

    if (existingIndex >= 0) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push(newItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    setIsModalOpen(true);
  };


  const handleViewCart = () => {
    setIsModalOpen(false);
    router.push('/cart');
  };

  if (!product) {
    return <div className="text-center py-10 text-black">Loading product...</div>;
  }

  return (
    <div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center border-b pb-2">
              <h3 className="text-lg font-semibold text-black">Added to Cart</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                &times;
              </button>
            </div>
            <div className="mt-4 text-black">
              ✅ <strong>{product.title}</strong> has been added to your cart.
            </div>
            <div className="mt-6 flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Close
              </button>
              <button
                onClick={handleViewCart}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                View Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Banner */}
      <div
        className="bg-cover bg-center py-20 px-4 text-white"
        style={{
          backgroundImage:
            "url('#')",
        }}
      >
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold">{product.title}</h3>
          <Breadcrumb
            links={[
              { href: '/', label: 'Home' },
              { href: '/products', label: 'Product' },
              { href: '#', label: product.title, active: true },
            ]}
          />
        </div>
      </div>

      {/* Product Info */}
      <main className="py-20 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10">
              <div className="w-full lg:w-1/2">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="w-full lg:w-1/2 pl-10">
                <h3 className="text-black text-3xl font-semibold">{product.title}</h3>
                <p className="text-xl text-red-600 mt-2">${product.price}</p>
                <form className="mt-4 flex space-x-4" onSubmit={handleAddToCart}>
                  <input
                    type="number"
                    value={1}
                    readOnly
                    className="border px-4 py-2 w-20 text-black"
                  />
                  <button
                    type="submit"
                    className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
                  >
                    Add to cart
                  </button>
                </form>
                <p className="mt-4 text-sm text-gray-600">
                  Category:{' '}
                  <Link href={`/product-category/${product.category}`} className="text-gray-600">
                    {product.category}
                  </Link>
                </p>
              </div>
            </div>

            {/* Prev/Next */}
            <div className="flex justify-between items-center border-t pt-10">
              <div className="border-r pr-4">
                <span className="block text-black">Prev Post</span>
                <h4>
                  <Link href="/product/Startup" className="text-gray-600">
                    Startup
                  </Link>
                </h4>
              </div>
              <div className="text-right">
                <span className="block text-black">Next Post</span>
                <h4>
                  <Link href="/product/core" className="text-gray-600">
                    Core
                  </Link>
                </h4>
              </div>
            </div>

            <CommentsForm productId="14390" />
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 py-6 text-center text-gray-400 text-sm">
        <p>© DBS. All rights reserved</p>
      </footer>
    </div>
  );
}





// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import Breadcrumb from '@/components/Breadcrumb';
// import CommentsForm from '@/components/CommentsForm';

// export default function PrestigeProductPage() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const router = useRouter();

//   const handleAddToCart = (e) => {
//     e.preventDefault();

//     const product = {
//       id: 14390,
//       title: 'Prestige',
//       price: '74.99',
//       quantity: 1,
//     };

//     const cart = JSON.parse(localStorage.getItem('cart')) || [];

//     const existing = cart.find((item) => item.id === product.id);

//     if (existing) {
//       const updatedCart = cart.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//     } else {
//       cart.push(product);
//       localStorage.setItem('cart', JSON.stringify(cart));
//     }

//     setIsModalOpen(true);
//   };

//   const handleViewCart = () => {
//     setIsModalOpen(false);
//     router.push('/cart');
//   };

//   return (
//     <div>
//       {/* ✅ Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
//           <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
//             <div className="flex justify-between items-center border-b pb-2">
//               <h3 className="text-lg font-semibold text-black">Added to Cart</h3>
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="text-gray-500 hover:text-gray-800"
//               >
//                 &times;
//               </button>
//             </div>
//             <div className="mt-4 text-black">
//               ✅ <strong>Prestige</strong> has been added to your cart.
//             </div>
//             <div className="mt-6 flex justify-end space-x-2">
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={handleViewCart}
//                 className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//               >
//                 View Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ✅ Banner */}
//       <div
//         className="bg-cover bg-center py-20 px-4 text-white"
//         style={{
//           backgroundImage:
//             "url('https://autoshistoryrecord.com/wp-content/uploads/2023/02/about-us-banner-img.jpg')",
//         }}
//       >
//         <div className="container mx-auto">
//           <h3 className="text-4xl font-bold">Prestige</h3>
//           <Breadcrumb
//             links={[
//               { href: '/', label: 'Home' },
//               { href: '/products', label: 'Product' },
//               { href: '#', label: 'Prestige', active: true },
//             ]}
//           />
//         </div>
//       </div>

//       {/* ✅ Product Info */}
//       <main className="py-20 bg-gray-50">
//         <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
//           <div className="lg:col-span-8">
//             <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10">
//               <div className="w-full lg:w-1/2">
//                 <img
//                   src="https://autoshistoryrecord.com/wp-content/uploads/woocommerce-placeholder-600x600.png"
//                   alt="Prestige"
//                   className="w-full h-auto object-contain"
//                 />
//               </div>
//               <div className="w-full lg:w-1/2 pl-10">
//                 <h3 className="text-black text-3xl font-semibold">Prestige</h3>
//                 <p className="text-xl text-red-600 mt-2">74.99$</p>
//                 <form className="mt-4 flex space-x-4" onSubmit={handleAddToCart}>
//                   <input
//                     type="number"
//                     value={1}
//                     readOnly
//                     className="border px-4 py-2 w-20 text-black"
//                   />
//                   <button
//                     type="submit"
//                     className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
//                   >
//                     Add to cart
//                   </button>
//                 </form>
//                 <p className="mt-4 text-sm text-gray-600">
//                   Category:{' '}
//                   <Link href="/product-category/boat-history" className="text-gray-600">
//                     Yacht History Report
//                   </Link>
//                 </p>
//               </div>
//             </div>
//             <CommentsForm />
//           </div>
//         </div>
//       </main>

//       <footer className="bg-gray-900 py-6 text-center text-gray-400 text-sm">
//         <p>© DBS. All rights reserved</p>
//       </footer>
//     </div>
//   );
// }

