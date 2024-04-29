"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import HomePageImage from "../../public/images/home.jpg";

const Hero = () => {
  const router = useRouter();
  const handleScroll = () => {
    router.push("/#schedule-demo");
  };
  return (
    <section className="h-screen bg-cover bg-center relative">
      <Image
        priority
        loading="eager"
        alt="Hero Image"
        sizes="100vw"
        style={{
          width: "100%",
          height: "100%",
        }}
        src={HomePageImage}
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-8">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Elevate Your Business with{" "}
            <span className="text-yellow-500 underline underline-offset-8">
              Summit Media
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover the power of our comprehensive service solutions.
          </p>
          <div className="w-full flex items-center justify-center">
            <button className="p-[3px] relative" onClick={handleScroll}>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg" />
              <div className="px-8 py-2 md:text-2xl bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Schedule a Demo
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
