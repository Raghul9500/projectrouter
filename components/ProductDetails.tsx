"use client";

import Image from "next/image";

type Product = {
  slug: string;
  name: string;
  price: string;
  img: string;
};

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="max-w-4xl mx-auto py-20 text-center">
      <Image
        src={product.img}
        alt={product.name}
        width={300}
        height={300}
        className="mx-auto mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-xl text-gray-600">{product.price}</p>
    </div>
  );
}
