'use client';

import Script from 'next/script';
import React, { useEffect, useState } from 'react';

// export default function GlobalScripts() {

export default function CurrencySwitcher() {
  const [mounted, setMounted] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [exchangeRates, setExchangeRates] = useState({});
  const [convertedPrice, setConvertedPrice] = useState(null);
  const basePriceUSD = 100;

  // Only show content after client-side mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fetch exchange rates only after mounted
  useEffect(() => {
    if (mounted) {
      fetch('https://open.er-api.com/v6/latest/USD')
        .then(res => res.json())
        .then(data => setExchangeRates(data.rates))
        .catch(err => console.error('Exchange rate error:', err));
    }
  }, [mounted]);

  useEffect(() => {
    if (mounted && exchangeRates[currency]) {
      const rate = exchangeRates[currency];
      setConvertedPrice((basePriceUSD * rate).toFixed(2));
    }
  }, [currency, exchangeRates, mounted]);

  if (!mounted) return null; // 🔒 prevent mismatch by skipping SSR

  return (
    <>
      {/* Currency Switcher */}
         <div className="fixed top-4 left-4 z-50 bg-black/80 text-white px-4 py-2 mt-40 rounded shadow-lg flex flex-col space-y-2 w-fit">
      <div className="flex space-x-2">
        <button
          onClick={() => setCurrency('USD')}
          className={`px-3 py-1 rounded ${currency === 'USD' ? 'bg-white text-black' : 'hover:bg-white/20'}`}
        >
          USD $
        </button>
        <button
          onClick={() => setCurrency('GBP')}
          className={`px-3 py-1 rounded ${currency === 'GBP' ? 'bg-white text-black' : 'hover:bg-white/20'}`}
        >
          GBP £
        </button>
      </div>
      <div className="text-sm mt-1">
        {convertedPrice
          ? `Price: ${currency} ${convertedPrice}`
          : 'Loading rate...'}
      </div>
    </div>

      {/* Speculation rules */}
      <script
        type="speculationrules"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            prefetch: [
              {
                source: 'document',
                where: {
                  and: [
                    { href_matches: '/*' },
                    {
                      not: {
                        href_matches: [
                          '/wp-*.php',
                          '/wp-admin/*',
                          '/wp-content/uploads/*',
                          '/wp-content/*',
                          '/wp-content/plugins/*',
                          '/wp-content/themes/natix/*',
                          '/*\\?(.+)',
                        ],
                      },
                    },
                    { not: { selector_matches: 'a[rel~="nofollow"]' } },
                    { not: { selector_matches: '.no-prefetch, .no-prefetch a' } },
                  ],
                },
                eagerness: 'conservative',
              },
            ],
          }),
        }}
      />

      {/* Add http:// prefix to URLs */}
      <Script id="url-prefix-fix" strategy="afterInteractive">
        {`
          (function(){
            function maybePrefixUrlField() {
              const value = this.value.trim();
              if (value !== '' && !value.startsWith('http')) {
                this.value = 'http://' + value;
              }
            }
            const urlFields = document.querySelectorAll('input[type="url"]');
            for (let j = 0; j < urlFields.length; j++) {
              urlFields[j].addEventListener('blur', maybePrefixUrlField);
            }
          })();
        `}
      </Script>

      {/* WooCommerce fix */}
      <Script id="woocommerce-no-js-fix" strategy="afterInteractive">
        {`
          (function() {
            var c = document.body.className;
            c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
            document.body.className = c;
          })();
        `}
      </Script>

      {/* Elementor lazyload */}
      <Script id="lazyload-elementor" strategy="afterInteractive">
        {`
          const lazyloadRunObserver = () => {
            const lazyloadBackgrounds = document.querySelectorAll('.e-con.e-parent:not(.e-lazyloaded)');
            const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('e-lazyloaded');
                  observer.unobserve(entry.target);
                }
              });
            }, {
              rootMargin: '200px 0px 200px 0px'
            });
            lazyloadBackgrounds.forEach((el) => observer.observe(el));
          };

          ['DOMContentLoaded', 'elementor/lazyload/observe'].forEach((event) => {
            document.addEventListener(event, lazyloadRunObserver);
          });
        `}
      </Script>
    </>
  );
}
