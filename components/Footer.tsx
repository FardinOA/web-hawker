import { Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className=" section_gap bg-gradient-to-tr from-primary/10 to-primary/5 lg:rounded-3xl   ">
      <div className="container grid grid-cols-1 gap-8 divide-y-2 divide-[#5b38cf41] ">
        <div className="h-40"></div>
        <div className="flex justify-between gap-4 pt-4 ">
          <p className="tracking-wider">
            &copy; 2024 vivasoftltd. All rights reserved.
          </p>

          <div>
            <a href="#">
              <Linkedin className="bg-primary size-9 rounded-md p-1.5 text-white " />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
