'use client';
import Link from 'next/link';

export default function BlogCard({ title, author, date, link }) {
  return (
    <div className="border border-gray-200 p-6 bg-white rounded shadow-sm">
      <h5 className="text-xl font-semibold mb-2 text-[#222]">
        <Link href={link} className="hover:text-blue-900">
          {title}
        </Link>
      </h5>
      <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
        <span>
          <i className="fa fa-user mr-1" /> By <span className="font-medium">{author}</span>
        </span>
        <span>
          <i className="fa fa-clock-o mr-1" /> {date}
        </span>
      </div>
      <Link
        href={link}
        className="text-red-700 font-medium hover:text-blue-900 flex items-center"
      >
        Read More <i className="fas fa-long-arrow-right ml-2" />
      </Link>
    </div>
  );
}
