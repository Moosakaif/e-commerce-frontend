
'use client';

import { FiMessageCircle, FiSend, FiBookOpen } from 'react-icons/fi'; // ✅ All icons included
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    text: "I was skeptical at first, but Autos History Record exceeded my expectations!",
    name: "Mark",
    role: "CEO, Co-Founder",
    stars: 5,
  },
  {
    text: "Autos History record is a game-changer! I uncovered detailed vehicle info easily.",
    name: "John Rick",
    role: "Manager",
    stars: 5,
  },
  {
    text: "It helped me avoid a bad purchase by showing a hidden accident history.",
    name: "David Astin",
    role: "Designer",
    stars: 4,
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">People Like You Already Enjoy Web Hosting</h2>
        <p className="text-gray-500 mt-2">Helping over 15,000+ Customers Like You Since 2008.</p>
      </div>

      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="max-w-3xl mx-auto"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md text-center">
              <ul className="flex justify-center mb-4">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <li key={i} className="text-yellow-500 text-xl">
                    <FaStar />
                  </li>
                ))}
              </ul>
              <FaQuoteLeft className="text-2xl text-red-500 mx-auto mb-4" />
              <p className="text-gray-700 italic mb-6">{item.text}</p>
              <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
              <small className="text-sm text-gray-500">{item.role}</small>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Support Boxes */}
      <div className="grid sm:grid-cols-3 gap-4 mt-16 max-w-5xl mx-auto px-4">
        <div className="bg-pink-500 text-white p-6 rounded-lg shadow sha">
          <FiMessageCircle className="text-3xl mb-2" />
          <h3 className="text-lg font-bold">Live Support</h3>
          <p className="text-sm">Live Chat & Support Solution</p>
        </div>

        <div className="bg-pink-400 text-white p-6 rounded-lg shadow">
          <FiSend className="text-3xl mb-2" />
          <h3 className="text-lg font-bold">Send Ticket</h3>
        </div>

        <div className="bg-purple-400 text-white p-6 rounded-lg shadow">
          <FiBookOpen className="text-3xl mb-2" />
          <h3 className="text-lg font-bold">Knowledge Base</h3>
          <p className="text-sm">Build Knowledge Base System</p>
        </div>
      </div>
    </section>
  );
}
