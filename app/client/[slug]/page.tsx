import { testimonials } from "@/components/data/testmonials";
export default async function TestimonialDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ unwrap params
  const { slug } = await params;

  const slugify = (text: string) =>
    text.toLowerCase().trim().replace(/\s+/g, "-");

  const testimonial = testimonials.find((item) => slugify(item.name) === slug);

  if (!testimonial) return <div>Not Found</div>;

  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold">{testimonial.name}</h1>
      <p className="mt-4">{testimonial.message}</p>
      <p className="text-gray-400 mt-2">{testimonial.date}</p>
    </div>
  );
}
