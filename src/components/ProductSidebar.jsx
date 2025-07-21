export default function ProductSidebar() {
  return (
    <aside className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-2">Search</h2>
        <input
          type="text"
          placeholder="Search..."
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Recent Posts</h2>
        <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
          <li><a href="/vpsservers">VPS Servers</a></li>
          <li><a href="/dedicatedservers">Dedicated Servers</a></li>
          <li><a href="/wildcard-ssl-certificates">Wildcard SSL Certificates</a></li>
          <li><a href="/dedictaing-hosting">Dedicating Hosting</a></li>
          <li><a href="/reseller">Reseller</a></li>
        </ul>
      </div>

      {/* Add Archives & Categories similarly */}
    </aside>
  );
}
