
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Your component code...

const features = [
  {
    title: 'Worldwide Network',
    image: '/images/Worldwide-Network.png',
    animation: 'slideInRight',
    className:'text-gray-800',
  },
  {
    title: 'High Quality Hardware',
    image: '/images/High-Quality-Hardware.png',
    animation: 'slideInLeft',
  },
  {
    title: 'Cloud Technology',
    image: '/images/Cloud-Technology.png',
    animation: 'slideInDown',
  },
  {
    title: 'Powerful Control Panel',
    image: '/images/Powerful-Control-Panel.png',
    animation: 'zoomIn',
  },
];

const animationVariants = {
  slideInRight: { hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  slideInLeft: { hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  slideInDown: { hidden: { y: -100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  zoomIn: { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
};

const TrustSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#960000] to-[#ae0000] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Our State Of Art Vehicle History Features!
        </motion.h2>
        <p className="text-gray-400 mb-12">
          Experience cutting-edge hosting features for unmatched performance and reliability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map(({ title, image, animation }, i) => (
            <motion.div
              key={i}
              variants={animationVariants[animation]}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="bg-[#f8f8f8] p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
            >
              <Image src={image} alt={title} width={190} height={150} />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
