'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white py-28 px-6"
        style={{
          backgroundImage:
            'url(https://autoshistoryrecord.com/wp-content/uploads/2023/02/about-us-banner-img.jpg)',
        }}
      >
        <div className="container mx-auto ml-50">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 max-w-xl">
            Autos History Record provides data from trusted sources and industry experts.
          </p>
          <nav className="mt-4">
            <ol className="flex gap-2 text-sm text-white/80">
              <li>
                <Link href="/">Home</Link> /
              </li>
              <li>About Us</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          {/* Vision */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <Image
              src="/images/Vision.png"
              alt="vision-img"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-black">Our Vision</h3>
            <p className="text-gray-700">
              Providing the Preferred Car with Accurate Data. At Autos History Record, we aspire
              to provide a straightforward yet impactful vision: to equip everyone in the
              automotive realm with knowledge and insights that elevate the quality of their
              decisions.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <Image
              src="/images/Mission.png"
              alt="mission-img"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-black">Our Mission</h3>
            <p className="text-gray-700">
              At Autos History Record, we hold our commitment to excellence and precision in high
              regard. Our experienced inspectors meticulously examine every aspect of the vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-6 border-t border-gray-200">
        <div className="container mx-auto text-center text-sm text-gray-500">
          © DBS. All rights reserved
        </div>
      </footer>
      
    </div>
  );
}
