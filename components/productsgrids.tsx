"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    slug: "norton-1",
    name: "Norton Security 1",
    price: "$25.00",
    img: "/image/p1.png",
  },
  {
    slug: "norton-2",
    name: "Norton Security 2",
    price: "$25.00",
    img: "/image/p2.png",
  },
  {
    slug: "norton-3",
    name: "Norton Security 3",
    price: "$25.00",
    img: "/image/p3.png",
  },
  {
    slug: "norton-4",
    name: "Norton Security 4",
    price: "$25.00",
    img: "/image/p4.png",
  },
  {
    slug: "norton-5",
    name: "Norton Security 5",
    price: "$25.00",
    img: "/image/p5.png",
  },
  {
    slug: "norton-6",
    name: "Norton Security 6",
    price: "$25.00",
    img: "/image/p6.png",
  },
  {
    slug: "norton-7",
    name: "Norton Security 7",
    price: "$25.00",
    img: "/image/p7.png",
  },
  {
    slug: "norton-8",
    name: "Norton Security 8",
    price: "$25.00",
    img: "/image/p8.png",
  },
];


export default function ProductsGrid() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <Link href={`/Product/${product.slug}`} key={index}>
            <div
              className="bg-gray-200 p-6 rounded-md 
               transition-all duration-300 
               hover:bg-yellow-400 
               hover:shadow-2xl 
               hover:-translate-y-2 cursor-pointer"
            >
              <div className="bg-white p-6 mb-4 flex justify-center items-center">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>

              <h2 className="text-center font-semibold text-lg">
                {product.name}
              </h2>
              <p className="text-center font-bold text-lg">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
