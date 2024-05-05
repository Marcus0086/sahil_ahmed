import ContactFrom from "@/components/contactFrom";
import Projects from "@/components/projects";
import Reels from "@/components/reels";

const Services = () => {
  return (
    <>
      <div className="relative h-[100dvh] overflow-hidden">
        <video
          src="https://www.savageglobalmarketing.com/wp-content/uploads/2022/09/tacobell-video-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover cursor-auto rounded-md bg-muted"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center bg-black/50 transition-all ease-in-out duration-150 hover:bg-transparent p-6 text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-xl text-center text-lg md:text-xl">
            Discover the wide range of services we offer to help your business
            thrive.
          </p>
        </div>
      </div>
      <Reels />
      <Projects />
      <ContactFrom />
    </>
  );
};

export default Services;
