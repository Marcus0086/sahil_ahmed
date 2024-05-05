import FeaturedProject from "@/components/featuredProject";
import { SparklesCore } from "@/components/ui/sparkles";

import { userMetaData } from "@/lib/data";

const Projects = () => {
  return (
    <section className="w-full p-16">
      <section className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden mt-12z md:mt-36">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center mb-4">
          Our work speaks for itself.
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
      </section>
      <div className="grid grid-cols-12 gap-24 gap-y-24 md:gap-y-32 gap-x-0 sm:gap-x-8 md:gap-x-16">
        <div className="col-span-12 md:col-span-6">
          <FeaturedProject
            title={userMetaData?.projects?.[1].title || ""}
            type={userMetaData?.projects?.[1].type || ""}
            summary={userMetaData?.projects?.[1].summary || [""]}
            img={userMetaData?.projects?.[1].img || ""}
            link={userMetaData?.projects?.[1].link || ""}
            github={userMetaData?.projects?.[1].github}
            orierntation="portrait"
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <FeaturedProject
            title={userMetaData?.projects?.[0].title || ""}
            type={userMetaData?.projects?.[0].type || ""}
            summary={userMetaData?.projects?.[0].summary || [""]}
            img={userMetaData?.projects?.[0].img || ""}
            link={userMetaData?.projects?.[0].link || ""}
            github={userMetaData?.projects?.[0].github}
            orierntation="portrait"
          />
        </div>
        <div className="col-span-12">
          <FeaturedProject
            title={userMetaData?.projects?.[3].title || ""}
            type={userMetaData?.projects?.[3].type || ""}
            summary={userMetaData?.projects?.[3].summary || [""]}
            img={userMetaData?.projects?.[3].img || ""}
            link={userMetaData?.projects?.[3].link || ""}
            github={userMetaData?.projects?.[3].github}
            orierntation="landscape"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
