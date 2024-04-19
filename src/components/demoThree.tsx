import Image from "next/image";
import Link from "next/link";

const DemoThree = () => {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" id="about">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                About Me
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                I am a Full Stack Developer with a passion for creating stunning
                and efficient web applications. With a background in both
                front-end and back-end development, I have the skills and
                experience to create dynamic, user-friendly applications that
                meet client needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        id="projects"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Projects
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Here are some of the projects {"I've"} worked on. Each one
                showcases my skills in different areas of full stack
                development.
              </p>
            </div>
          </div>
          <div className="py-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-center justify-center lg:gap-12 [&>img]:mx-auto">
            <Image
              alt="Project 1"
              className="aspect-[1/1] overflow-hidden rounded-lg object-cover object-center"
              height="200"
              src="/images/placeholder.svg"
              width="200"
            />
            <Image
              alt="Project 2"
              className="aspect-[1/1] overflow-hidden rounded-lg object-cover object-center"
              height="200"
              src="/images/placeholder.svg"
              width="200"
            />
            <Image
              alt="Project 3"
              className="aspect-[1/1] overflow-hidden rounded-lg object-cover object-center"
              height="200"
              src="/images/placeholder.svg"
              width="200"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Contact Me
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                If {"you're"} interested in working with me or just want to say
                hello, feel free to get in touch.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DemoThree;
