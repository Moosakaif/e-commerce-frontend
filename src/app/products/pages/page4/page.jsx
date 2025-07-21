import Link from 'next/link';
import BlogCard from '@/components/BlogCard'; // ✅ Add this line
import Sidebar from '@/components/Sidebar'; // if using Sidebar too
import Breadcrumb from '@/components/Breadcrumb';
import { ChevronRight } from 'lucide-react'; // optional icon

export default function ProductsPage() {
    return (
        <div className="bg-[#f7f7f7]">
            {/* Hero Section */}
            <div
                className="bg-cover bg-center py-20 px-4 text-white"
                style={{
                    backgroundImage:
                        "url('https://autoshistoryrecord.com/wp-content/uploads/2023/02/about-us-banner-img.jpg')",
                }}>
                <div className="container mx-auto">
                    <h3 className="text-4xl font-bold">Blog</h3>
                    <Breadcrumb
                        links={[
                            { href: '/', label: 'Home' },
                            { href: '#', label: 'Product', active: true },
                        ]}
                    />
                </div>
            </div>

            {/* Blog/Product Content */}
            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-wrap -mx-4">
                    {/* Left - Blog Grid */}
                    <div className="w-full lg:w-2/3 px-4">
                        {/* Blog Card will go here */}
                        <div className="grid gap-8">
                            {/* Example blog post */}
                            <BlogCard
                                title="Essential"
                                author="admin"
                                date="January 17, 2025"
                                link="/product/essential"
                            />
                            <BlogCard
                                title="Exclusive"
                                author="admin"
                                date="July 2, 2024"
                                link="/product/exclusive"
                            />
                            <BlogCard
                                title="Gold"
                                author="admin"
                                date="January 17, 2025"
                                link="/product/gold"
                            />
                            <BlogCard
                                title="Platinmun"
                                author="admin"
                                date="July 2, 2024"
                                link="/product/platinmun"
                            />
                            <BlogCard
                                title="Super"
                                author="admin"
                                date="January 17, 2025"
                                link="/product/super"
                            />
                            {/* Add more as needed */}
                        </div>
                    </div>

                    <div className="text-left mt-8">
                        <nav
                            className="inline-flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 shadow-sm bg-black"
                            aria-label="Pagination"
                        >
                            <span
                                aria-label="Page 1"
                                aria-current="page"
                                className="px-3 py-1 text-sm font-semibold text-white hover:bg-red-700"
                            >
                                <Link
                                    href="/products"
                                >
                                    1
                                </Link>

                            </span>

                            <Link
                                href="/products/pages/page2"
                                className="px-3 py-1 text-sm text-white hover:bg-red-700"
                                aria-label="Page 2"
                            >
                                2
                            </Link>

                            <span className="px-3 py-1 text-sm text-gray-500">…</span>

                            <Link
                                href="#"
                                className="px-3 py-1 text-sm text-white hover:bg-red-700"
                                aria-label="Page 4"
                            >
                                4
                            </Link>

                            <Link
                                href="/products"
                                className="ml-2 p-1 text-white hover:bg-red-700 rounded-full"
                                aria-label="Next Page"
                            >
                                <ChevronRight size={18} />
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
