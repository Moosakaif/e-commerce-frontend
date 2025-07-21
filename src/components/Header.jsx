'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensures client-only rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <header className="w-full bg-transparent absolute z-50 ">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src="/images/DriveCheckr_Logo.png"
            alt="Autos History Record"
            className="h-12 md:h-16 w-auto"
          />
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <span className="block w-6 h-0.5 bg-white mb-1" />
          <span className="block w-6 h-0.5 bg-white mb-1" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-white font-medium">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li className="relative group">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1"
            >
              Our Services <ChevronDown size={16} />
            </button>
            <ul className={`absolute bg-white text-black mt-2 py-3 px-6 shadow rounded w-51 space-y-3 z-50 ${servicesOpen ? 'block' : 'hidden'}`}>
              {[
                { href: '/truck-history', text: 'Truck History Report' },
                { href: '/rv-history', text: 'RV History Report' },
                { href: '/atv-history', text: 'ATV History Report' },
                { href: '/van-history', text: 'Van History Report' },
                { href: '/car-history', text: 'Car History Report' },
                { href: '/bike-history', text: 'Bike History Report' },
                { href: '/boat-history', text: 'Boat History Report' }
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.text}</a>
                </li>
              ))}
            </ul>
          </li>
          <li><a href="/contact">Contact</a></li>
          <li>
           <div
  className="mt-[2px] mr-[4px] mb-[3px] ml-[4px] pt-[2px] pr-[13px] pb-[2px] pl-[12px] transition-[background,border,border-radius,box-shadow,transform] duration-300"
  style={{ backgroundColor: 'var(--e-global-color-4cc9edd)' }}
>
  <div className="elementor-shortcode">
    <a className="btn nav-link" href="/cart">
      <img
        decoding="async"
        className="cart-img w-10 h-6 md:w-8 md:h-8 object-contain"
        src="/images/Cart.png"
        alt="Cart Icon"
      />
      <span className="badge badge-info"></span>
    </a>
  </div>
</div>


            {/* <a href="/cart">
              <img src="https://autoshistoryrecord.com/wp-content/themes/natix/assets/img/cart-icon.png" alt="Cart" className="h-6" />
            </a> */}
          </li>
        </ul>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white text-black md:hidden shadow-md z-40">
            <ul className="flex flex-col p-4 space-y-2">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full"
                >
                  Our Services <ChevronDown size={16} />
                </button>
                {servicesOpen && (
                  <ul className="mt-10 ml-10 space-y-2">
                    {[
                      { href: '/truck-history-report', text: 'Truck History Report' },
                      { href: '/rv-history-report', text: 'RV History Report' },
                      { href: '/atv-history-report', text: 'ATV History Report' },
                      { href: '/jet-ski-history-report', text: 'Jet Ski History Report' },
                      { href: '/van-history-report', text: 'Van History Report' },
                      { href: '/car-history-report', text: 'Car History Report' },
                      { href: '/bike-history-report', text: 'Bike History Report' },
                      { href: '/boat-history-report', text: 'Boat History Report' }
                    ].map((item, index) => (
                      <li key={index}>
                        <a href={item.href}>{item.text}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li><a href="/contact">Contact</a></li>
              <li>
                <a href="/cart">
                  <img src="https://autoshistoryrecord.com/wp-content/themes/natix/assets/img/cart-icon.png" alt="Cart" className="h-6" />
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
