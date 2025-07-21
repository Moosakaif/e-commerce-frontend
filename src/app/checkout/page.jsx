import Breadcrumb from '@/components/Breadcrumb';

export default function InfiniteProduct() {
  return (
    <div id="content" className="site-content bg-white text-gray-800">
      {/* Hero / Banner Section */}
      <div
        className="page-title-area bg-cover bg-center py-16 text-white"
        style={{
          backgroundImage: 'url("/images/checkout-banner.jpg")', // <- Replace with your banner image
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Checkout</h1>
          <p className="text-lg">Enter Banner Content Here</p>
          <div className="mt-4">
            <ul className="flex space-x-2 text-sm">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <a href="/checkout" className="hover:underline">
                  Checkout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div id="primary" className="py-12 bg-gray-50">
        <main id="main" className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Checkout Content */}
            <div className="lg:col-span-2">
              <article className="bg-white p-6 rounded-lg shadow">
                <div className="entry-content">
                  <div className="woocommerce">
                    <div className="woocommerce-notices-wrapper"></div>
                    {/* Add your WooCommerce checkout logic here */}
                    <p className="text-gray-500">Checkout component goes here...</p>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="sidebar-blog space-y-6">
              {/* Search Widget */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-2">Search</h2>
                <form className="flex">
                  <input
                    type="search"
                    name="s"
                    placeholder="Search..."
                    className="flex-grow border border-gray-300 rounded-l px-3 py-2"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
                  >
                    Search
                  </button>
                </form>
              </div>

              {/* Recent Posts */}
              <Widget title="Recent Posts" items={['VPS Servers', 'Dedicated Servers', 'Wildcard SSL Certificates', 'Dedicating Hosting', 'Reseller']} linkPrefix="/" />

              {/* Recent Comments */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-2">Recent Comments</h2>
                <ul className="list-disc pl-5">
                  <li>
                    <a className="text-blue-600 hover:underline" href="https://autoshistoryrecord.com/dedicatedservers/#comment-2">
                      A WordPress Commenter on Dedicated Servers
                    </a>
                  </li>
                </ul>
              </div>

              {/* Archives */}
              <Widget title="Archives" items={['March 2023', 'November 2018', 'October 2018', 'January 2013']} />

              {/* Categories */}
              <Widget title="Categories" items={['Cloud Hosting', 'Dedicated Hosting', 'Networking', 'Vps servers', 'Web Hosting']} />
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer
        className="footer-area py-6 bg-gray-100 text-center text-gray-600 text-sm"
        style={{ backgroundImage: 'url("")' }}
      >
        <p>&copy; DBS. All rights reserved</p>
      </footer>
    </div>
  );
}

function Widget({ title, items, linkPrefix = '#' }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx}>
            <a
              className="text-blue-600 hover:underline"
              href={`${linkPrefix}${item.toLowerCase().replace(/\s+/g, '')}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}




// import Breadcrumb from '@/components/Breadcrumb';

// export default function InfiniteProduct() {
//   return (
//     <div id="content" className="site-content bg-white text-gray-800">
//       {/* Hero / Banner Section */}
//       <div
//         className="page-title-area bg-cover bg-center py-16 text-white"
//         style={{
//           backgroundImage: 'url("/images/checkout-banner.jpg")', // <- Replace with your banner image
//         }}
//       >
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-2">Checkout</h1>
//           <p className="text-lg">Enter Banner Content Here</p>
//           <div className="mt-4">
//             <ul className="flex space-x-2 text-sm">
//               <li>
//                 <a href="/" className="hover:underline">
//                   Home
//                 </a>
//               </li>
//               <li>/</li>
//               <li>
//                 <a href="/checkout" className="hover:underline">
//                   Checkout
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div id="primary" className="py-12 bg-gray-50">
//         <main id="main" className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Main Checkout Content */}
//             <div className="lg:col-span-2">
//               <article className="bg-white p-6 rounded-lg shadow">
//                 <div className="entry-content">
//                   <div className="woocommerce">
//                     <div className="woocommerce-notices-wrapper"></div>
//                     {/* Add your WooCommerce checkout logic here */}
//                     <p className="text-gray-500">Checkout component goes here...</p>
//                   </div>
//                 </div>
//               </article>
//             </div>

//             {/* Sidebar */}
//             <div className="sidebar-blog space-y-6">
//               {/* Search Widget */}
//               <div className="bg-white p-4 rounded-lg shadow">
//                 <h2 className="text-xl font-semibold mb-2">Search</h2>
//                 <form className="flex">
//                   <input
//                     type="search"
//                     name="s"
//                     placeholder="Search..."
//                     className="flex-grow border border-gray-300 rounded-l px-3 py-2"
//                     required
//                   />
//                   <button
//                     type="submit"
//                     className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
//                   >
//                     Search
//                   </button>
//                 </form>
//               </div>

//               {/* Recent Posts */}
//               <Widget title="Recent Posts" items={['VPS Servers', 'Dedicated Servers', 'Wildcard SSL Certificates', 'Dedicating Hosting', 'Reseller']} linkPrefix="/" />

//               {/* Recent Comments */}
//               <div className="bg-white p-4 rounded-lg shadow">
//                 <h2 className="text-xl font-semibold mb-2">Recent Comments</h2>
//                 <ul className="list-disc pl-5">
//                   <li>
//                     <a className="text-blue-600 hover:underline" href="https://autoshistoryrecord.com/dedicatedservers/#comment-2">
//                       A WordPress Commenter on Dedicated Servers
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               {/* Archives */}
//               <Widget title="Archives" items={['March 2023', 'November 2018', 'October 2018', 'January 2013']} />

//               {/* Categories */}
//               <Widget title="Categories" items={['Cloud Hosting', 'Dedicated Hosting', 'Networking', 'Vps servers', 'Web Hosting']} />
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Footer */}
//       <footer
//         className="footer-area py-6 bg-gray-100 text-center text-gray-600 text-sm"
//         style={{ backgroundImage: 'url("")' }}
//       >
//         <p>&copy; DBS. All rights reserved</p>
//       </footer>
//     </div>
//   );
// }

// function Widget({ title, items, linkPrefix = '#' }) {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow">
//       <h2 className="text-xl font-semibold mb-3">{title}</h2>
//       <ul className="space-y-2">
//         {items.map((item, idx) => (
//           <li key={idx}>
//             <a
//               className="text-blue-600 hover:underline"
//               href={`${linkPrefix}${item.toLowerCase().replace(/\s+/g, '')}`}
//             >
//               {item}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
