"use client";

import Image from "next/image";
import Link from "next/link";
import { testimonials } from "./data/testmonials";


export default function TestimonialSection() {
   const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-");
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          What Clients Say?
        </h2>

        {testimonials.map((item) => (
          <Link key={item.id} href={`/client/${slugify(item.name)}`}>
            <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 cursor-pointer">
              <div className="w-32 h-32 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              <div className="text-left space-y-4">
                <p className="text-gray-600">{item.message}</p>

                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.date}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
