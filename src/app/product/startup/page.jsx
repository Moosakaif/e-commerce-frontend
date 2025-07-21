'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ProductSidebar from '@/components/ProductSidebar';
import CommentsForm from '@/components/CommentsForm';

export default function InfiniteProduct() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const handleAddToCart = (e) => {
        e.preventDefault();

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({
            title: 'Startup',
            price: 24.99,
            qty: 1,
        });
        localStorage.setItem('cart', JSON.stringify(cart));

        setIsModalOpen(true); // ✅ Show modal
    };

    const handleViewCart = () => {
        setIsModalOpen(false);
        router.push('/cart'); // ✅ Redirect to cart
    };

    return (
        <div className='items-center'>
            {/* ✅ Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
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
                            ✅ <strong>Infinite</strong> has been added to your cart.
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
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-blue-900"
                            >
                                View Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ✅ Banner */}
            <div
                className="bg-cover bg-center py-20 px-4 text-white"
                style={{
                    backgroundImage:
                        "url('https://autoshistoryrecord.com/wp-content/uploads/2023/02/about-us-banner-img.jpg')",
                }}
            >
                <div className="container mx-auto">
                    <h3 className="text-4xl font-bold">Startup</h3>
                    <Breadcrumb
                        links={[
                            { href: '/', label: 'Home' },
                            { href: '/products', label: 'Product' },
                            { href: '#', label: 'Startup', active: true },
                        ]}
                    />
                </div>
            </div>

            {/* ✅ Main Content */}
            <main className="py-20 bg-gray-50">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Product Section */}
                    <div className="lg:col-span-8">
                        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10">
                            {/* Left: Product Image */}
                            <div className="w-full lg:w-1/2 pb-15">
                                <img
                                    src="/images/Placeholder.png"
                                    alt="Awaiting product image"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            {/* Right: Text Info */}
                            <div className="w-full lg:w-1/2 pl-10">
                                <h3 className="text-black text-3xl font-semibold">Startup</h3>
                                <p className="text-xl text-red-600 mt-2">8.99$</p>

                                <form className="mt-4 flex space-x-4" onSubmit={handleAddToCart}>
                                    <input
                                        type="number"
                                        defaultValue={1}
                                        min={1}
                                        className="border px-4 py-2 w-20 text-black"/>
                                    <button
                                        type="submit"
                                        className="bg-red-500 hover:bg-blue-950 text-white px-6 py-2 rounded"
                                    >
                                        Add to cart
                                    </button>
                                </form>

                                <p className="mt-4 text-sm text-gray-600">
                                    Category:{' '}
                                    <Link href="/product-category/boat-history" className="text-gray-600">
                                      Uncategorized
                                    </Link>
                                </p>
                            </div>
                        </div>

                        {/* Prev/Next */}
                        <div className="flex justify-between items-center border-t pt-10">                
                            <div className="text-right">
                                <span className="block text-black">Next Post</span>
                                <h4>
                                    <Link href="/product/prestige" className="text-gray-600">
                                        Prestige
                                    </Link>
                                </h4>
                            </div>
                        </div>

                        {/* Comments */}
                        <CommentsForm  productId="14390"/>
                    </div>                  
                </div>
            </main>

            {/* ✅ Footer */}
            <footer className="bg-gray-900 py-6 text-center text-gray-400 text-sm">
                <p>Copyright © DBS. All rights reserved</p>
            </footer>
        </div>
    );
}
