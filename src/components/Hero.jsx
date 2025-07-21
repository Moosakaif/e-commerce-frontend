"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Auto Evaluation",
    description:
      "Our goal is to gather comprehensive information that enables informed decision-making when buying or selling a vehicle, ensuring both parties are satisfied with the transaction.",
    image:
      "/images/CAR-INSPECTION.png",
    ctaLink: "/car-history",
  },
  {
    title: "Van Evaluation",
    description: `
      Physical Condition: Examining exterior and interior for damage.
      Mechanical Condition: Checking engine, brakes, and other parts.`,
    image:
      "/images/TRUCK-INSPECTION.png",
    ctaLink: "/van-history",
  },
  {
    title: "Bike Evaluation",
    description: `
      Ownership History: Previous owners and ownership periods.
      Liens: Check for legal issues or ownership claims.`,
    image:
      "/images/BIKE-INSPECTION.png",
    ctaLink: "/bike-history",
  },
];

const HeroSlider = () => {
  return (
    <section className="w-full overflow-hidden bg-gray-900 ">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full py-16 px-6 text-center md:text-left bg-cover bg-center mt-10">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                <div>
                  <h1 className="text-4xl text-white font-bold mb-4">{slide.title}</h1>
                  <p className="text-white text-lg whitespace-pre-line mb-6">{slide.description}</p>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a
                      href={slide.ctaLink}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Order Now
                    </a>
                    <a
                      href={slide.ctaLink}
                      className="border border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="w-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    width={800}
                    height={500}
                    className="rounded-lg object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;

