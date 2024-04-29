import { InfiniteMovingCards } from "@/components/ui/infiniteMovingCards";
import { SparklesCore } from "./ui/sparkles";

const testimonials = [
  {
    title: "Video Editing",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=3518&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Social Media Management",
    image:
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Website Building",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=3440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Brand Development",
    image:
      "https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ServicesMarquee = () => {
  return (
    <section className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden mt-12z md:mt-36">
      <h2 className="text-3xl lg:text-5xl font-semibold text-center mb-4">
        Brands come to us for our creative solutions.
      </h2>
      <div className="w-full lg:w-[70rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </section>
  );
};

export default ServicesMarquee;
