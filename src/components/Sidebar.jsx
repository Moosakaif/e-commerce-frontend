export default function Sidebar() {
    return (
        <aside className="space-y-8">
            {/* Search */}
            <div>
                <h2 className="text-lg font-semibold mb-3 text-black">Search</h2>
                <form className="flex">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full border p-2 rounded-l text-black"
                    />
                    <button className="bg-black text-white px-4 rounded-r ">Search</button>
                </form>
            </div>

            {/* Recent Posts */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm text-black">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Recent Posts</h2>
                <ul className="space-y-3">
                    <li><a href="#" className="text-base hover:text-red-900 transition-colors block">VPS Servers</a></li>
                    <li><a href="#" className="text-base hover:text-red-900 transition-colors block">Dedicated Servers</a></li>
                    <li><a href="#" className="text-base hover:text-red-900 transition-colors block">Wildcard SSL Certificates</a></li>
                    <li><a href="#" className="text-base hover:text-red-900 transition-colors block">Dedicating Hosting</a></li>
                    <li><a href="#" className="text-base hover:text-red-900 transition-colors block">Reseller</a></li>
                </ul>
            </div>

            {/* Archives */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm text-black">
                <h2 className="">Archives</h2>
                <ul className="space-y-2 text-sm text-black ">
                    <li><a href="#" className="hover:text-red-900">March 2023</a></li>
                    <li><a href="#" className="hover:text-red-900">November 2018</a></li>
                    <li><a href="#" className="hover:text-red-900">October 2018</a></li>
                </ul>
            </div>

            {/* Categories */}

            <div className=" rounded-xl border border-gray-200 bg-white p-6 shadow-sm text-black">
                <h2 className="text-xl font-semibold mb-3">Categories</h2>
                <ul className="space-y-2">
                    <li className="cat-item cat-item-16">
                        <a
                            href="https://autoshistoryrecord.com/category/cloud-hosting/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cloud Hosting
                        </a>
                    </li>
                    <li className="cat-item cat-item-17">
                        <a
                            href="https://autoshistoryrecord.com/category/dedicated-hosting/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Dedicated Hosting
                        </a>
                    </li>
                    <li className="cat-item cat-item-18">
                        <a
                            href="https://autoshistoryrecord.com/category/networking/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Networking
                        </a>
                    </li>
                    <li className="cat-item cat-item-20">
                        <a
                            href="https://autoshistoryrecord.com/category/vps-servers/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            VPS Servers
                        </a>
                    </li>
                    <li className="cat-item cat-item-21">
                        <a
                            href="https://autoshistoryrecord.com/category/web-hosting/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Web Hosting
                        </a>
                    </li>
                </ul>
            </div>


        </aside>
    );
}
