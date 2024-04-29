"use client";

import { Link2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRef } from "react";

import TextHighLight from "@/components/ui/textHighLight";

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
    <section className="flex flex-col  items-center justify-center w-full mt-36">
      <h2 className="text-3xl lg:text-5xl font-semibold text-center mb-8 max-w-[800px]">
        Drive growth with our{" "}
        <TextHighLight className="h-[100px]">services.</TextHighLight>
      </h2>
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
    </section>
  );
};
export default VideoStack;
