import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
        <a
          href="/car-history"
          className="text-black font-semibold hover:text-red-950 shake-hover transition duration-200 ease-in-out"
        >
          Car History Report
        </a>
        <a
          href="/truck-history"
          className="text-black font-semibold hover:text-red-950 shake-hover transition duration-200 ease-in-out"
        >
          Truck History Report
        </a>
        <a
          href="/van-history"
          className="text-black font-semibold hover:text-red-950 shake-hover transition duration-200 ease-in-out"
        >
          Van History Report
        </a>
        <a
          href="/rv-history"
          className="text-black font-semibold hover:text-red-950e shake-hover transition duration-200 ease-in-out"
        >
          RV History Report
        </a>
        <a
          href="/bike-history"
          className="text-black font-semibold hover:text-red-950 shake-hover transition duration-200 ease-in-out"
        >
          Bike History Report
        </a>
      </div>
    </div>
  )
}