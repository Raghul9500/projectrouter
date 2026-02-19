"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Map Background */}
      <Image
        src="/image/mapimg.jpg"
        alt="Map Background"
        fill
        priority
        className="object-cover grayscale"
      />

      {/* Gray Overlay */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* Yellow Banner */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-yellow-400 w-[85%] max-w-6xl flex flex-col md:flex-row items-center justify-between px-10 py-8 shadow-xl">
          {/* Left Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              REQUEST A FREE QUOTE
              <span className="text-black text-3xl">📞</span>
            </h2>

            <p className="text-black mt-2">
              Get answers and advice from people you want it from.
            </p>
          </div>

          {/* Button */}
          <button className="mt-6 md:mt-0 bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition">
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
}
