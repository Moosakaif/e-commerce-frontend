'use client';
import React from "react";

const Contact = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
        <div
          className="text-white py-16 text-left"
          style={{
            backgroundImage: `url('https://autoshistoryrecord.com/wp-content/uploads/2023/03/contact-us-banner-img.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ><div className="ml-70 mt-22">
            <h1 className="text-4xl font-bold">Contact</h1>
            <p className="mt-4">Our expert representatives are available to assist you 24/7/365.</p>
            <div className="mt-2 text-sm">
              <a href="/" className="underline">Home</a> &nbsp;/&nbsp; Contact
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-4">
            {/* Address */}
            <div className="flex space-x-4 items-start bg-white p-6 rounded-md shadow-md border border-gray-200">
              <img
                src="/images/Location.png"
                alt="Location Icon"
                className="h-12"
              />
              <div>
                <h4 className="font-semibold text-lg text-black">Mailing Address</h4>
                <p className="text-gray-500">
                  121 Street, California, United States of America –&nbsp;
                  <a href="/contact" className="text-red-500 underline">Map</a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex space-x-4 items-start bg-white p-6 rounded-md shadow-md border border-gray-200">
              <img
                src="/images/Email.png"
                alt="Email Icon"
                className="h-10"
              />
              <div>
                <h4 className="font-semibold text-lg text-black">Email Address</h4>
                <p>
                  <a href="mailto:info@autoshistoryrecord.com" className="text-red-500 block">info@autoshistoryrecord.com</a>
                  <a href="mailto:support@autoshistoryrecord.com" className="text-red-500 block">support@autoshistoryrecord.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 bg-white p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-black text-center">Contact Form</h2>
            <p className="mb-6 text-gray-500 text-center">
              Let us know your questions, suggestions and concerns by filling out the form below.
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="col-span-2 p-2 border rounded text-black" required>
                <option>Choose Department</option>
                <option>Sales</option>
                <option>Technical</option>
                <option>Billing</option>
                <option>Support</option>
                <option>Other</option>
              </select>
              <input
                type="text"
                placeholder="Full Name..."
                className="p-2 border rounded text-gray-500"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-2 border rounded text-gray-500"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="p-2 border rounded text-gray-500"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-2 border rounded text-gray-500"
                required
              />
              <textarea
                rows="6"
                placeholder="Message..."
                className="col-span-2 p-2 border rounded text-gray-500"
                required
              />
              <button
                type="submit"
                className="col-span-2 py-3 bg-red-500 text-white rounded-full hover:bg-red-800 transition"
              >
                Submit Form
              </button>
            </form>
          </div>
        </section>

        {/* Customer Success */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-8 text-black">Customer Success Team</h2>
            <p className="mb-8 text-gray-500">
              Dedicated experts ready to assist you. Our Customer Success Team ensures your hosting experience is exceptional.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center space-y-2 bg-gray-50 p-6 rounded-md shadow-md">
                <img
                  src="/images/Success-img-1.png"
                  alt="Report Abuse"
                  className="h-19 animate-pulse"
                />
                <h4 className="text-lg font-semibold text-black">Report Abuse</h4>
                <p className="text-gray-500">Email us to report any abuse activity.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 bg-gray-50 p-6 rounded-md shadow-md">
                <img
                  src="/images/Success-img-2.png"
                  alt="General Inquiry"
                  className="h-16 animate-pulse"
                />
                <h4 className="text-lg font-semibold text-black">General Inquiry</h4>
                <p className="text-gray-500">Our dedicated professionals are always ready to assist you.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-6 border-t border-gray-200">
        <div className="container mx-auto text-center text-sm text-gray-500">
          © DBS. All rights reserved
        </div>
      </footer>
    </>
  );
};

export default Contact;



// 'use client';
// import React from "react";
// import Link from "next/link";

// const Contact = () => {
//   return (
//     <>
//     <div>
//       {/* Hero Section */}
//       <div
//         className="text-white py-16 text-center"
//         style={{
//           backgroundImage: `url('https://autoshistoryrecord.com/wp-content/uploads/2023/03/contact-us-banner-img.jpg')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <h1 className="text-4xl font-bold">Contact</h1>
//         <p className="mt-4">Our expert representatives are available to assist you 24/7/365.</p>
//         <div className="mt-2 text-sm">
//           <a href="/" className="underline">Home</a> &nbsp;/&nbsp; Contact
//         </div>
//       </div>

//       {/* Contact Info */}
//       <section className="bg-gray-100 py-12">
//         <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-4">
//           {/* Address */}
//           <div className="flex space-x-4 items-start">
//             <img
//               src="https://autoshistoryrecord.com/wp-content/uploads/2023/02/contact-us-location-img.svg"
//               alt="Location Icon"
//               className="h-12"
//             />
//             <div>
//               <h4 className="font-semibold text-lg text-black">Mailing Address</h4>
//               <p className="text-gray-500">
//                 121 Street, California, United States of America –&nbsp;
//                 <a href="/contact" className="text-red-500 underline">Map</a                           >
//               </p>
//             </div>
//           </div>

//           {/* Email */}
//           <div className="flex space-x-4 items-start bg-white p-15 m-5 rounded-md- shadow-md max-w-3xl mx-auto mb-10 shake-hover">
//             <img
//               src="https://autoshistoryrecord.com/wp-content/uploads/2023/02/contact-us-mail-img.svg"
//               alt="Email Icon"
//               className="h-10"
//             />
//             <div>
//               <h4 className="font-semibold text-lg text-black">Email Address</h4>
//               <p>
//                 <a href="mailto:info@autoshistoryrecord.com" className="text-red-500 mb-51">info@autoshistoryrecord.com</a><br />
//                 <a href="mailto:support@autoshistoryrecord.com" className="text-red-500 m-3 mb-9">support@autoshistoryrecord.com</a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form */}
//       <section className="bg-gray-50 py-12">
//         <div className="max-w-4xl mx-auto px-4 bg-white p-6 rounded-md shadow-md  mb-19 ">
//           <h2 className="text-2xl font-bold mb-2 text-black text-center shake-hover">Contact Form</h2>
//           <p className="mb-6 text-gray-500 text-center">Let us know your questions, suggestions and concerns by filling out the form below.</p>
//           <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <select className="col-span-2 p-2 border rounded text-black" required>
//               <option>Choose Department</option>
//               <option>Sales</option>
//               <option>Technical</option>
//               <option>Billing</option>
//               <option>Support</option>
//               <option>Other</option>
//             </select>
//             <input type="text" placeholder="Full Name..." className="p-2 border rounded text-gray-500" required />
//             <input type="email" placeholder="Email Address" className="p-2 border rounded-2xlded text-gray-500" required />
//             <input type="tel" placeholder="Phone Number" className="p-2 border rounded text-gray-500" required />
//             <input type="text" placeholder="Subject" className="p-2 border rounded text-gray-500" required />
//             <textarea rows="6" placeholder="Message..." className="col-span-2 p-2 border rounded text-gray-500" required />
//             <button
//               type="submit"
//               className="col-span-2 py-3 bg-red-500 text-white rounded-full hover:bg-red-800 transition"
//             >
//               Submit Form
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Customer Success */}
//       <section className="bg-gray-100 py-12">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-2xl font-bold mb-8 text-black">Customer Success Team</h2>
//           <p className="mb-15 text-gray-500">
//             Dedicated experts ready to assist you. Our Customer Success Team ensures your hosting experience is exceptional.
//           </p>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="flex flex-col items-center space-y-2 bg-gray-50 p-6 rounded-md- shadow-md max-w-3xl mx-auto mb-10 shake-hover">
//               <img
//                 src="https://autoshistoryrecord.com/wp-content/uploads/2023/02/success-img-1.svg"
//                 alt="Report Abuse"
//                 className="h-16 animate-bounce"
//               />
//               <h4 className="text-lg font-semibold text-black">Report Abuse</h4>
//               <p className="text-gray-500">Email us to report any abuse activity.</p>
//             </div>
//             <div className="flex flex-col items-center space-y-2 bg-gray-50 p-6 rounded-md shadow-md max-w-3xl mx-auto mb-10 shake-hover">
//               <img
//                 src="https://autoshistoryrecord.com/wp-content/uploads/2023/02/success-img-2.svg"
//                 alt="General Inquiry"
//                 className="h-16 animate-pulse"
//               />
//               <h4 className="text-lg font-semibold text-black">General Inquiry</h4>
//               <p className="text-gray-500">Our dedicated professionals are always ready to assist you.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//     {/* Footer */}
//       <footer className="bg-gray-50 py-6 border-t border-gray-200">
//         <div className="container mx-auto text-center text-sm text-gray-500">
//           © DBS. All rights reserved
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Contact;