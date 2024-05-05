import { SparklesCore } from "@/components/ui/sparkles";
import { InfiniteMovingCards } from "@/components/ui/infiniteMovingCards";
import Link from "next/link";

const testimonials = [
  {
    title: "Video",
    video:
      "https://www.savageglobalmarketing.com/wp-content/uploads/2022/09/willis-video-bg.mp4",
  },
  {
    title: "Social ",
    video:
      "https://www.savageglobalmarketing.com/wp-content/uploads/2022/09/bbb-video-bg.mp4",
  },
  {
    title: "Website Building",
    video:
      "https://www.savageglobalmarketing.com/wp-content/uploads/2022/09/tacobell-video-bg.mp4",
  },
];

const Reels = () => {
  return (
    <>
      <section className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden mt-12z md:mt-36">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center mb-4">
          This is where the magic happens.
        </h2>
        <div className="w-full lg:w-[70rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            id="sparkles"
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
      </section>
      <ul className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {testimonials.map(({ title, video }, index) => (
          <li
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden dark:bg-gray-800 border-[12px]"
          >
            <div className="aspect-[3/4] relative overflow-clip rounded-2xl">
              <video
                className="h-full w-full object-cover"
                autoPlay
                controls
                loop
                muted
                playsInline
                src={video}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reels;
