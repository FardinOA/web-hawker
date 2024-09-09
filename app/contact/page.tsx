import ContactForm from "@/components/Contact/ContactForm";
import { MapPin } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <main className=" space-y-10 lg:space-y-20 ">
      <section className="lg:w-[95%] mx-auto relative ">
        <div
          style={{
            backgroundImage: "url('/images/contact-hero.jpeg')",
            // clipPath: "polygon(0 0, 100% 0%, 100% 85%, 0% 100%)",
          }}
          className="bg-cover bg-no-repeat bg-center h-[50vh] lg:rounded-b-3xl clip-me   "
        ></div>

        <div className="absolute size-full inset-0 lg:rounded-b-3xl bg-black/40 backdrop-blur-sm flex items-center justify-center ">
          <div>
            <h1 className="text-3xl lg:text-5xl uppercase text-center text-white">
              feel free to contact us
            </h1>
          </div>
        </div>
      </section>

      <section className="container space-y-8 ">
        <h2 className="text-3xl lg:text-5xl text-center">Our Locations</h2>

        <div>
          <div className="border shadow-[11px_10px_0px_0px_#5E3BD0] border-primary rounded-xl p-4 lg:p-8 font-sans ">
            <div className="flex justify-between items-center">
              <p>Dhaka, Bangladesh</p>{" "}
              <MapPin className="fill-primary stroke-primary-foreground lg:size-[60px] " />
            </div>

            <div className="">
              <p>South Kuril, Gulshan, Dhaka</p>
              <p>01478XXXXXX</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default Page;
