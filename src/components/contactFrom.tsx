"use client";

import Script from "next/script";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SparklesCore } from "./ui/sparkles";
import { cn } from "@/lib/utils";

const ContactFrom = ({ fullscreen }: { fullscreen?: boolean }) => {
  useEffect(() => {
    // Reinitialize Calendly embed when link changes
    // @ts-ignore - Calendly is not defined in window
    if (document && window.Calendly) {
      // @ts-ignore - Calendly is not defined in window
      window.Calendly.initInlineWidget({
        url: "https://calendly.com/raghav_tars/30min",
        parentElement: document.getElementById("calendly-inline-widget"),
      });
    }
  }, []);
  return (
    <>
      <section className="mt-12 pb-20 md:mt-36 px-4 h-full items-center justify-center flex flex-col">
        <h2
          id="schedule-demo"
          className="text-3xl lg:text-5xl font-semibold text-center mb-4"
        >
          Get in touch with us
        </h2>
        <div className="w-full lg:w-[40rem] h-40 relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          <SparklesCore
            id="tsparticlesfullpage1"
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <div className="container mx-auto px-4">
          <div
            className={cn(
              "grid gap-8 items-center justify-center",
              fullscreen ? "grid-cols-1 gap-12" : "grid-cols-1 xl:grid-cols-2"
            )}
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">
                {"Let's"} get to know each other
              </h2>
              <p className="text-gray-600 mb-8">
                We are ready to help. Get in touch with us to learn more about
                our services.
              </p>
              <form>
                <div className="flex md:flex-row flex-col items-center justify-start w-full gap-8 mb-4">
                  <div className="w-full md:w-2/5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      type="text"
                    />
                  </div>
                  <div className="w-full md:w-3/5">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="message">Inquiry</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={5}
                  />
                </div>
                <Button className="px-8 py-3" type="submit" variant="default">
                  Submit
                </Button>
              </form>
            </div>
            <div className="w-full flex items-center justify-end gap-12">
              <div
                id="calendly-inline-widget"
                className="calendly-inline-widget w-full xl:w-[575px] h-[670px] bg-black order-2"
              />
              {fullscreen ? (
                <div className="hidden md:flex text-start items-start justify-center flex-col w-3/6">
                  <h2 className="text-5xl font-bold mb-4">
                    Book a 5 minute meeting with us
                  </h2>
                  <p className="text-center text-gray-400 mt-4 text-3xl font-bold">
                    To get into world of opportunities
                  </p>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </section>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export default ContactFrom;
