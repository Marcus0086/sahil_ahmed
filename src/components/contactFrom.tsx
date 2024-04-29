import Script from "next/script";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactFrom = ({ includes }: { includes?: "calendy" | "hubspot" }) => {
  return (
    <>
      <section className="mt-12 pb-20 md:mt-36 px-8 h-full">
        <h2
          id="schedule-demo"
          className="text-3xl lg:text-5xl font-semibold text-center mb-8"
        >
          Get in touch with us
        </h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
            <div
              className="calendly-inline-widget w-full h-[900px]"
              data-url="https://calendly.com/raghav_tars/30min"
            />
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
