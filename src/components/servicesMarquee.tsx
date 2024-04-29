import { InfiniteMovingCards } from "@/components/ui/infiniteMovingCards";
import TextHighLight from "@/components/ui/textHighLight";

const testimonials = [
  {
    title: "Video Editing",
  },
  {
    title: "Social Media Management",
  },
  {
    title: "Website Building",
  },
  {
    title: "Brand Development",
  },
];

const ServicesMarquee = () => {
  return (
    <section className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden mt-12z md:mt-36">
      <h2 className="text-3xl lg:text-5xl font-semibold text-center mb-8">
        Brands come to us for our{" "}
        <TextHighLight>creative solutions.</TextHighLight>
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </section>
  );
};

export default ServicesMarquee;
