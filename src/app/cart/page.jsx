'use client';
import React, { useEffect, useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [product, setProducts] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  useEffect(() => {
    const fetchCartProducts = async () => {
      if (cartItems.length === 0) return;

      try {
        const res = await fetch('http://localhost:5000/api/products/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ items: cartItems }),
        });

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products from backend:', err);
      }
    };

    fetchCartProducts();
  }, [cartItems]);

  // Load from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existing = cartItems.find((item) => item.id === product.id);
    if (!existing) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  const proceedToCheckout = async () => {
    try {
      console.log('Sending checkout request...');
      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cartItems }),
      });

      const data = await res.json();
      console.log('Response:', data);

      if (res.ok) {
           window.location.href = 'https://square.link/u/dw205QDo';
      } else {
        alert('Failed to create order');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Something went wrong during checkout.');
    }
  };



  return (
    <main className="bg-gray-100">
      {/* Hero */}
      <div
        className="bg-cover bg-center py-20 px-4 text-white"
        style={{
          backgroundImage:
            "url('https://autoshistoryrecord.com/wp-content/uploads/2023/02/about-us-banner-img.jpg')",
        }}
      >
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold">Cart</h3>
          <Breadcrumb
            links={[
              { href: '/', label: 'Home' },
              { href: '#', label: 'Cart', active: true },
            ]}
          />
        </div>
      </div>

      {/* Cart Content */}
      {cartItems.length === 0 ? (
        <section className="py-16 bg-[#f8f9fa]">
          <div className="container mx-auto px-4 text-center">
            <div className="text-[42px] font-bold text-[#181b22] mb-4">😕</div>
            <h2
              className="text-[26px] font-bold text-[#181b22] mb-2"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Your cart is currently empty!
            </h2>
            <p
              className="text-[16px] text-[#161515] leading-[1.8]"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              But don’t worry, we’ve got some fresh items just for you.
            </p>
          </div>
        </section>
      ) : (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Cart Table */}
              <div className="lg:col-span-2 overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-[#f8f9fa]">
                    <tr className="text-left text-black">
                      <th className="p-4 border-b">Product</th>
                      <th className="p-4 border-b">Details</th>
                      <th className="p-4 border-b text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, idx) => (
                      <tr key={idx} className="border-b">
                        <td className="p-4 align-top">
                          <img
                            src="/images/Placeholder.png"
                            alt={item.title}
                            className="w-35 h-20 object-contain"
                          />
                        </td>
                        <td className="p-4 align-top">
                          <div className="font-bold text-[#181b22]">{item.title}</div>
                          <div className="text-sm text-[#555] mt-1">{item.price}$</div>

                          <div className="mt-3 space-y-2">
                            <div className="flex items-center w-fit border rounded overflow-hidden">
                              <button
                                aria-label={`Reduce quantity of ${item.title}`}
                                className="wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--minus px-3 py-1 text-xl text-gray-700 hover:bg-gray-100"
                                onClick={() =>
                                  setCartItems((prev) =>
                                    prev.map((p) =>
                                      p.id === item.id && p.quantity > 1
                                        ? { ...p, quantity: p.quantity - 1 }
                                        : p
                                    )
                                  )
                                }
                              >
                                －
                              </button>
                              <input
                                type="number"
                                min={1}
                                max={9999}
                                value={item.quantity}
                                aria-label={`Quantity of ${item.title} in your cart.`}
                                readOnly
                                className="wc-block-components-quantity-selector__input w-12 text-center px-2 py-1 border-x"
                              />
                              <button
                                aria-label={`Increase quantity of ${item.title}`}
                                className="wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--plus px-3 py-1 text-xl text-gray-700 hover:bg-gray-100"
                                onClick={() =>
                                  setCartItems((prev) =>
                                    prev.map((p) =>
                                      p.id === item.id
                                        ? { ...p, quantity: p.quantity + 1 }
                                        : p
                                    )
                                  )
                                }
                              >
                                ＋
                              </button>
                            </div>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-600 text-sm hover:underline"
                            >
                              Remove item
                            </button>
                          </div>
                        </td>

                        <td className="p-4 align-top text-right font-semibold text-[#181b22]">
                          {(parseFloat(item.price) * item.quantity).toFixed(2)}$
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Sidebar Totals */}
              <div className="bg-[#f8f9fa] p-6 rounded-md border border-gray-200">
                <h2 className="text-xl font-semibold mb-4 text-black">Cart totals</h2>

                <div className="mb-4">
                  <button className="w-full text-left text-sm text-gray-700 bg-white border rounded px-4 py-2">
                    + Add a coupon
                  </button>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-black">
                    <span className="text-[#333]">Subtotal</span>
                    <span className="font-medium ">
                      {cartItems
                        .reduce(
                          (acc, item) => acc + parseFloat(item.price) * item.quantity,
                          0
                        )
                        .toFixed(2)}
                      $
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-base text-black">
                    <span>Total</span>
                    <span>
                      {cartItems
                        .reduce(
                          (acc, item) => acc + parseFloat(item.price) * item.quantity,
                          0
                        )
                        .toFixed(2)}
                      $
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={proceedToCheckout}
                    className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
                  >
                    Proceed to Checkout

                  </button >
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Product Grid */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2
            className="text-center text-[36px] leading-[1.25] font-bold mb-10 text-[#181b22]"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            New in Store
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {[
              {
                title: 'Startup',
                price: '8.99',
                link: '/product/startup',
                id: 14388,
              },
              {
                title: 'Prestige',
                price: '74.99',
                link: '/product/prestige',
                id: 14390,
              },
              {
                title: 'Core',
                price: '19.99',
                link: '/product/core',
                id: 14391,
              },
              {
                title: 'Infinite',
                price: '24.99',
                link: '/product/infinte',
                id: 14416,
              },
            ].map((product, i) => (
              <li
                key={i}
                className="wc-block-grid__product list-none border border-[#e2e2e2] rounded-lg p-4 text-center shadow-sm hover:shadow-md transition duration-200 bg-white"
              >
                <a href={product.link} className="block">
                  <img
                    src={product.image || '/images/Placeholder.png'}
                    alt={product.title}
                    className="w-full h-[250px] object-contain mx-auto mb-4"
                  />
                  <div className="text-[18px] font-medium text-[#181b22]">{product.title}</div>
                </a>
                <div className="text-[16px] text-[#515151] font-semibold mt-2">
                  {product.price}$
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-[#1E222f] hover:bg-red-950 text-white py-2 px-4 rounded font-medium transition duration-150"
                  >
                    Add to cart
                  </button>
                </div>
              </li>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-6 border-t border-gray-200">
        <div className="container mx-auto text-center text-sm text-gray-500">
          © DBS. All rights reserved
        </div>
      </footer>
    </main>
  );
}
