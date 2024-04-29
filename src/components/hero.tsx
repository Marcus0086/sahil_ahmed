"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import HoverBorderGradient from "@/components/ui/hoverButtonGradient";

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
            <span className="text-yellow-500">Sumit Media</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover the power of our comprehensive service solutions.
          </p>
          <div className="w-full flex items-center justify-center">
            <HoverBorderGradient onClick={handleScroll}>
              Schedule Demo
            </HoverBorderGradient>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
