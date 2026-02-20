import ProductDetails from "@/components/ProductDetails";

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
    name: "Norton Security 4",
    price: "$25.00",
    img: "/image/p4.png",
  },
  {
    slug: "norton-6",
    name: "Norton Security 4",
    price: "$25.00",
    img: "/image/p4.png",
  },
  {
    slug: "norton-7",
    name: "Norton Security 4",
    price: "$25.00",
    img: "/image/p4.png",
  },
  {
    slug: "norton-8",
    name: "Norton Security 4",
    price: "$25.00",
    img: "/image/p4.png",
  },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="p-20 text-center">Product Not Found</div>;
  }

  return <ProductDetails product={product} />;
}
