'use client';
import { useState } from 'react';

export default function BikeHistoryPage() {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            title: 'Boat Evaluation',
            description:
                "Boat history reports provide peace of mind by offering transparency about the boat's history and condition. They can be obtained online from various providers by entering the boat's HIN. These reports are essential tools for buyers considering a used boat, helping them assess potential risks and make informed purchasing decisions.",
            image: '/images/boat-1-INSPECTION.png',
        },
        {
            title: 'Boat History Report',
            description: (
                <ul className="space-y-2 pl-5 list-disc">
                    <li>Service and Maintenance Records: Information about routine maintenance and any major repairs or upgrades performed on the boat.</li>
                    <li>Ownership History: Number of previous owners and duration of ownership periods.</li>
                    <li>Liens and Encumbrances: Checks for any outstanding liens or legal claims against the boat that could affect ownership transfer.</li>
                </ul>
            ),
            image: '/images/boat-2-INSPECTION.png',
        },
    ];

    return (
        <>
            <div className="bg-gray-100 text-gray-900">
                {/* Banner */}
                <div
                    className="bg-cover bg-center py-20 text-white"
                    style={{
                        backgroundImage: 'url("https://autoshistoryrecord.com/wp-content/uploads/2023/02/about-us-banner-img.jpg")',
                    }}
                >
                    <div className="container mx-auto px-4">
                        <h3 className="text-3xl font-bold">Boat History Report</h3>
                        <p className="mt-2">Enter Banner Content Here</p>
                        <ul className="flex gap-2 text-sm mt-4">
                            <li><a href="/" className="hover:underline">Home</a></li>
                            <li>/</li>
                            <li><a href="/boat-history" className="hover:underline">Boat History Report</a></li>
                        </ul>
                    </div>
                </div>

                {/* Slide Section */}
                <section className="bg-gray-800 text-white py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 items-center gap-8">
                            <div>
                                <h2 className="text-3xl font-semibold mb-4">
                                    {slides[activeSlide].title}
                                </h2>
                                {
                                    typeof slides[activeSlide].description === 'string' ? (
                                        <p className="mb-4">{slides[activeSlide].description}</p>
                                    ) : (
                                        <div className="mb-4">{slides[activeSlide].description}</div>
                                    )
                                }
                                <div className="mt-6 flex gap-4">
                                    <a
                                        href="https://square.link/u/ViYVaqL3"
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded font-semibold"
                                    >
                                        Pricing Plan
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-semibold"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={slides[activeSlide].image}
                                    alt="Boat Report"
                                    width={600}
                                    height={400}
                                    className="rounded shadow-lg"
                                />
                            </div>
                        </div>

                        {/* Dots */}
                        <div className="flex justify-center mt-8 space-x-4">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveSlide(index)}
                                    className={`w-4 h-4 rounded-full transition ${index === activeSlide ? 'bg-white' : 'bg-gray-500'}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Report Links */}
                <div className="bg-gray-100 py-10 px-4">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
                        {[
                            { name: "Car", href: "/car-history" },
                            { name: "Truck", href: "/truck-history" },
                            { name: "Van", href: "/van-history" },
                            { name: "RV", href: "/rv-history" },
                            { name: "Bike", href: "/bike-history" },
                        ].map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                className="text-black font-semibold hover:text-red-950 shake-hover transition duration-200 ease-in-out"
                            >
                                {item.name} History Report
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Packages Section */}
            <section className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-black">Boat history report Packages</h2>
                    <p className="text-gray-600 mb-10">
                        <strong>Discover our competitive pricing that fits your budget</strong>
                    </p>

                    <div className="bg-gray-50 p-6 rounded-md shadow-md max-w-3xl mx-auto mb-10 shake-hover">
                        <p className="text-gray-700">
                            We offer competitive and transparent rates that cater to your specific needs. Whether you’re seeking a one-time vehicle history report or a subscription for ongoing access, we have flexible pricing options to suit you.
                        </p>
                    </div>

                    {/* Plan */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black justify-center">
                        <div className="bg-white shadow-xl rounded-xl p-4 md:p-8 text-center transition-all hover:scale-105 duration-300">
                            <div className="text-sm font-semibold text-gray-500 mb-2">TAT: 60 Minutes</div>
                            <div className="flex justify-center mb-4">
                                <img
                                    src="https://autoshistoryrecord.com/wp-content/uploads/2023/02/hosting-img-2.svg"
                                    alt="Hosting Icon"
                                    className="w-12 h-12"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">INFINITE</h3>
                            <ul className="space-y-3 text-left text-black">
                                {[
                                    "Vehicle Overview",
                                    "Hurricanes",
                                    "Title Record",
                                    "Market Value",
                                    "Accident Record",
                                    "Salvage",
                                    "Impounds",
                                    "HQ Car Images",
                                    "Run Aground",
                                    "Exports",
                                    "Sales Listing",
                                    "Registration History",
                                    "Active & Expired Warranties",
                                    "USCG Documentation",
                                    "Seized",
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
                                <div className="text-3xl font-bold mt-1">
                                    $24.<span className="text-xl">99</span> <small className="text-base">/mo</small>
                                </div>
                                <div className="mt-4">
                                    <a
                                        href="/product/infinte"
                                        className="inline-block bg-red-600 text-white px-6 py-2 rounded-full shake-hover transition"
                                    >
                                        Order Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-6 border-t border-gray-200">
                <div className="container mx-auto text-center text-sm text-white">
                    Copyright © DBS. All rights reserved
                </div>
            </footer>
        </>
    );
}
