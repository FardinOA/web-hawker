import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ContactForm = () => {
  return (
    <section className="container">
      <div className="p-4 md:p-6 lg:p-10 2xl:p-16 bg-accent/10 rounded-xl space-y-6 ">
        <div className="space-y-2">
          <h3 className="text-primary text-center text-3xl lg:text-5xl">
            Send us a message
          </h3>
          <p className="text-center text-lg font-sans font-medium ">
            {" "}
            Couldn’t find what you were looking for? Write to us at
          </p>
          <p className="text-center font-mono"> jhon@example.com</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-3xl mx-auto  ">
          <Input
            className=" focus-visible:ring-0 shadow-[6px_6px_0px_0px_#a089eb]  bg-white px-4 py-6 rounded-lg font-sans "
            placeholder="Name or nickname"
          />
          <Input
            className="  focus-visible:ring-0 shadow-[6px_6px_0px_0px_#a089eb]  bg-white px-4 py-6 rounded-lg font-sans "
            placeholder="Email"
          />
          <Textarea
            className=" focus-visible:ring-0 shadow-[6px_6px_0px_0px_#a089eb]   resize-none bg-white px-4 py-6 lg:h-40 rounded-lg font-sans lg:col-span-2 "
            placeholder="Message"
          />
          <div className="lg:col-span-2">
            <Button
              aria-label="Send Message"
              className=" font-sans shadow-[6px_6px_0px_0px_#a089eb]"
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
