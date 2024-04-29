"use client";

import { Link2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRef } from "react";

import TextHighLight from "@/components/ui/textHighLight";
import { SparklesCore } from "./ui/sparkles";

const VIDEOS = [
  {
    title: "Video Editing",
    url: "https://www.savageglobalmarketing.com/wp-content/uploads/2022/09/tacobell-video-bg.mp4",
    projectLink: "/contact",
  },
  {
    title: "Social Media Management",
    url: "https://www.savageglobalmarketing.com/wp-content/uploads/2022/09/willis-video-bg.mp4",
    projectLink: "/contact",
  },
  {
    title: "Website Building",
    url: "https://www.savageglobalmarketing.com/wp-content/uploads/2023/11/srt_sgm_website_video-1080p.mp4",
    projectLink: "/contact",
  },
  {
    title: "Brand Development",
    url: "https://www.savageglobalmarketing.com/wp-content/uploads/2022/09/bbb-video-bg.mp4",
    projectLink: "/contact",
  },
];

const VideoStack = () => {
  const videoRef = useRef<HTMLVideoElement[] | null>(null);

  const handleMouseEnter = (index: number) => {
    videoRef?.current?.[index].play();
  };

  const handleMouseLeave = (index: number) => {
    if (videoRef.current) {
      videoRef.current?.[index].pause();
      videoRef.current[index].currentTime = 0;
    }
  };

  return (
    <section className="flex flex-col relative  items-center justify-center w-full mt-24">
      <h2 className="text-3xl lg:text-5xl font-semibold text-center mb-4 relative z-20 max-w-[800px]">
        Drive growth with our services.
      </h2>
      <div className="w-full lg:w-[50rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div className="w-full">
        {VIDEOS.map((video, index) => (
          <div
            key={index}
            className="relative w-full h-[250px] lg:h-[600px] group after:absolute after:inset-x-0 after:bottom-0 after:h-[80px] after:bg-gradient-to-t after:from-black/60 after:to-transparent"
          >
            <video
              ref={(el) => {
                if (!videoRef.current) {
                  videoRef.current = [];
                }
                if (el) {
                  videoRef.current[index] = el;
                }
              }}
              className="w-full h-full object-cover object-center cursor-auto"
              muted
              loop
              playsInline
              autoPlay
              src={video.url}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <track kind="captions" />
            </video>
            <p className="absolute bottom-16 left-3 text-3xl lg:text-5xl font-bold text-white p-4">
              {video.title}
            </p>
            <Link
              href={video.projectLink}
              className="-z-10 group-hover:z-10 absolute bottom-3 left-6 text-lg text-white p-4 transition-transform duration-500 ease-in-out transform translate-y-4 group-hover:translate-y-0 flex items-center justify-center gap-2"
            >
              <Link2Icon className="h-6 w-6" />
              Open <span className="font-bold">Project</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
export default VideoStack;
