import Link from "next/link";
import { FaCertificate } from "react-icons/fa";

const services = [
  "Car history report",
  "Truck history report",
  "Bike history report",
  "Van history report",
  "RV history report",
  "Boat history report",
  "Jet Ski history report",
  "ATV history report",
];

export default function Services() {
  return (
    <section className="bg-gradient-to-r from-[#960000] to-[#ae0000] text-white py-20 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

        {/* Left Text Block */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-sm leading-relaxed mb-6 text-gray-100">
            We provide comprehensive details about the background, condition, and history of a vehicle,
            which is essential for both buyers and current owners. Here are the key components typically included in a car history report:
          </p>
          <Link href="/services">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold transition">
              Learn More
            </button>
          </Link>
        </div>

        {/* Service Cards */}
        <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((title, i) => (
            <div
              key={i}
              className="bg-[#1e1e1e] rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition shake-hover duration-200 ease-in-out">
              <FaCertificate className="text-yellow-400 text-3xl mb-4 " />
              <h3 className="text-sm font-semibold text-white">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
