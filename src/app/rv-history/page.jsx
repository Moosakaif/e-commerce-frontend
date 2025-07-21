// app/bike-history/page.jsx or components/BikeHistoryPage.jsx
'use client';
// import { useState } from 'react';
// import Image from 'next/image';

export default function BikeHistoryPage() {

  return (
    <>
      <div className="bg-gray-100 text-gray-900">
        {/* Banner Section */}
        <div
          className="bg-cover bg-center py-20 text-white"
          style={{
            backgroundImage: 'url("https://autoshistoryrecord.com/wp-content/uploads/2023/02/about-us-banner-img.jpg")',
          }}
        >
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold">RV History Report</h3>
            <p className="mt-2">Enter Banner Content Here</p>
            <ul className="flex gap-2 text-sm mt-4">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <a href="/rv-history" className="hover:underline">
                 RV History Report
                </a>
              </li>
            </ul>
          </div>
        </div>

            {/* Feature Section */}
      <section className="bg-gray-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4">RV Auto Evaluation</h2>
            <p className="mb-4">RV history reports are crucial for making informed decisions about purchasing a used RV car, as they provide transparency and help identify potential risks or issues that may not be immediately apparent from a visual inspection. We offer these reports online, often requiring the truck's Vehicle Identification Number (VIN) to generate the report.</p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded font-semibold"
              >Pricing Plan</a>
              <a
                href="#"
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-semibold"
              >Learn More</a>
            </div>
          </div>
          <div>
            <img
              src="/images/RV-INSPECTION.png"
              alt="Truck Maintenance"
              width={600}
              height={400}
              className="rounded shadow-lg"
            />
          </div>
        </div>
      </section>


        {/* Guarantee Section */}
        <div className="bg-gray-100 py-10 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
            <a href="/car-history"
              className="text-black font-semibold hover:text-red-950 shake-hover transition duration-200 ease-in-out"
            >Car History Report
            </a>
            <a href="/truck-history"
              className="text-black font-semibold hover:text-red-950 shake-hover transition duration-200 ease-in-out"
            >Truck History Report
            </a>
            <a href="/van-history"
              className="text-black font-semibold hover:text-red-950 shake-hover transition duration-200 ease-in-out"
            >Van History Report
            </a>
            <a href="/rv-history"
              className="text-black font-semibold hover:text-red-950e shake-hover transition duration-200 ease-in-out"
            >RV History Report
            </a>
            <a href="/bike-history"
              className="text-black font-semibold hover:text-red-950 shake-hover transition duration-200 ease-in-out"
            >Bike History Report
            </a>
          </div>
        </div>

      </div>
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-black
          ">RV History Report Packages</h2>
          <p className="text-gray-600 mb-10">
            <strong>Discover our competitive pricing that fits your budget</strong>
          </p>
          <div className="bg-gray-50 p-6 rounded-md shadow-md max-w-3xl mx-auto mb-10 shake-hover">
            <p className="text-gray-700">
              We offer competitive and transparent rates that cater to your specific needs. Whether you’re seeking a one-time vehicle history report or a subscription for ongoing access, we have flexible pricing options to suit you.
            </p>
          </div>

          {/* Plan Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
            {/* ELITE Plan */}
            <div className="bg-white shadow-xl rounded-xl p-6 md:p-8 text-center transition-all hover:scale-105 duration-300">
              <div className="text-sm font-semibold text-gray-500 mb-2">TAT: 12 To 24 Hours</div>
              <img
                src="https://autoshistoryrecord.com/wp-content/uploads/2023/02/hosting-img-1.svg"
                alt="starter"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-4 text-black">ELITE</h3>
              <ul className="text-left text-sm space-y-3 text-black">
                {[
                  "Vehicle Overview",
                  "Market Value",
                  "Vehicle Specifications",
                  "Sales Listing",
                  "Accident Record",
                  "Theft Record",
                  "Open Recalls",
                  "Impounds",
                  "HQ Car Images",
                  "Active & Expired Warranties",
                  "Installed Options and Packages"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <img
                      src="https://autoshistoryrecord.com/wp-content/plugins/natix-toolkit/assets/images/plan-box-default-img.svg"
                      alt="check"
                      className="w-5 h-5 mt-1"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <small className="text-gray-500">Starting at:</small>
                <h2 className="text-2xl font-bold">$9.<span className="text-lg">99</span></h2>
              </div>
              <a
                href="/product/elite"
                className="inline-block mt-4 px-6 py-2 bg-red-400 text-white font-semibold rounded-full shake-hover transition"
              >
                Order Now
              </a>
            </div>

            {/* CORPORATE (POPULAR) Plan */}
            <div className="bg-white shadow-xl rounded-xl p-6 md:p-8 text-center transition-all hover:scale-105 duration-300">
              <div className="text-sm font-semibold text-gray-500 mb-2">TAT: 60 Minutes</div>
              <div className="flex justify-center mb-4">
                <img
                  src="https://autoshistoryrecord.com/wp-content/uploads/2023/02/hosting-img-2.svg"
                  alt="Hosting Icon"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">CORPORATE (POPULAR)</h3>
              <ul className="space-y-3 text-left text-black">
                {[
                  "Vehicle Overview",
                  "Theft Record",
                  "Title Record",
                  "Market Value",
                  "Accident Record",
                  "Salvage",
                  "Impounds",
                  "HQ Car Images",
                  "Open Recalls",
                  "Exports",
                  "Sales Listing",
                  "Vehicle Specification",
                  "Active & Expired Warranties",
                  "Installed Options & Packages",
                  "Title Brand"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <img
                      src={
                        idx === 0
                          ? "https://autoshistoryrecord.com/wp-content/uploads/2023/02/server-disk-icon.svg"
                          : "https://autoshistoryrecord.com/wp-content/plugins/natix-toolkit/assets/images/plan-box-default-img.svg"
                      }
                      alt=""
                      className="w-5 h-5 mt-1 mr-3"
                    />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 text-center text-black">
                <small className="text-gray-500">Starting at:</small>
                <div className="text-3xl font-bold text-black mt-1">
                  $14.<span className="text-xl">99</span> <small className="text-base">/mo</small>
                </div>
                <div className="mt-4">
                  <a
                    href="/product/core"
                    className="inline-block bg-red-600 text-white px-6 py-2 rounded-full  shake-hover transition"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>

            {/* BUSINESS Plan */}
            <div className="bg-white shadow-xl rounded-xl p-6 md:p-8 text-center transition-all hover:scale-105 duration-300">
              <div className="text-sm text-gray-600 mb-2">TAT: 30 Minutes</div>
              <img
                src="https://autoshistoryrecord.com/wp-content/uploads/2023/02/hosting-img-3.svg"
                alt="Prime Plan Icon"
                className="mx-auto mb-4 w-14 h-14"
              />
              <h3 className="text-xl font-semibold mb-4 text-black">BUSINESS</h3>
              <ul className="text-left space-y-3 text-black">
                {[
                  "Buy one get one free Report",
                  "High Quality Car Images",
                  "Vehicle Specifications",
                  "Market Value",
                  "Accident Record",
                  "Salvage",
                  "Theft Record",
                  "Vehicle Overview",
                  "Impounds",
                  "Open Recalls",
                  "Exports",
                  "Sales Listing",
                  "Active & Expired Warranties",
                  "Installed Options and Packages",
                  "Title Record",
                  "Title Brand"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <img
                      src="https://autoshistoryrecord.com/wp-content/uploads/2023/02/dedicated-img-9.svg"
                      alt=""
                      className="w-5 h-5 mt-1 mr-3"/>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <small className="block text-gray-500">Starting at:</small>
                <h2 className="text-3xl font-bold text-black">
                  $19.<span className="text-xl font-normal">99</span>{" "}
                  <small className="text-sm font-normal text-gray-500">/mo</small>
                </h2>
                <a
                  href="/product/business"
                  className="inline-block mt-4 bg-indigo-400 text-white px-6 py-2 rounded-full shake-hover transition"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 py-6 border-t border-gray-200" >
        <div className="container mx-auto text-center text-sm text-white">
         Copyright © DBS. All rights reserved
        </div>
      </footer >
    </>
  );
}
