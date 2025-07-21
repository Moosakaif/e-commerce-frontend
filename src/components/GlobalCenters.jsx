import Image from "next/image";

const markers = [
  { name: "United States", style: "top-[28%] left-[17%]" },
  { name: "Mexico", style: "top-[44%] left-[21%]" },
  { name: "Moscow", style: "top-[31%] left-[47%]" },
  { name: "Russia", style: "top-[15%] left-[60%]" },
  { name: "Australia", style: "top-[73%] left-[80%]" },
];

export default function GlobalCenters() {
  return (
    <section className="relative bg-black text-white py-20 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Global Data Centers</h2>
        <p className="text-gray-300 text-sm max-w-xl mx-auto">
          Powerful infrastructure strategically located across the globe to keep the record
        </p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto h-[500px]">
        {/* World Map Image using next/image */}
        <Image
          src="/images/Global-Data-Centers.png"
          alt="World Map"
          fill
          className="object-cover opacity-60 rounded"
        />

        {/* Location Markers */}
        {markers.map((marker, index) => (
          <div
            key={index}
            className={`absolute ${marker.style} flex items-center space-x-2`}
          >
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
            <span className="bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded">
              {marker.name}
            </span>
          </div>
        ))}
      </div>

      <p className="text-center mt-12 text-sm text-gray-400">
        We specialize in providing auto vehicles history reports
      </p>
    </section>
  );
}