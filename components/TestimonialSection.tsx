"use client";

import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20 relative">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          What Clients Say?
        </h2>

        {/* Testimonial Card */}
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          {/* Client Image */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 relative">
              <Image
                src="/image/picture.jpg"
                alt="Jone Due"
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>

          {/* Client Text */}
          <div className="text-left space-y-4">
            <p className="text-gray-600">
              "You guys rock! Thank you for making it painless, pleasant and
              most of all hassle free! I wish I would have thought of it first.
              I am really satisfied with my first laptop service."
            </p>

            <div className="mt-4">
              <h3 className="text-lg font-semibold">Jone Due</h3>
              <p className="text-gray-400 text-sm">12/02/2019</p>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2 mt-4">
              <span className="w-3 h-3 rounded-full bg-black"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-black"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
