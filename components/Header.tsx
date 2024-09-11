import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  const links = [
    {
      title: "Services",
      url: "#services",
    },
    {
      title: "Blog",
      url: "#",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];
  return (
    <header className="py-3 shadow sticky top-0 left-0 z-10 bg-white/50 backdrop-blur-md ">
      <div className="flex justify-between items-center container">
        <Link aria-label="go to home" href={`/`}>
          <Image
            src={`/images/wh_logo.png`}
            width={100}
            height={0}
            sizes="100"
            quality={100}
            priority
            alt="Logo"
            className="object-contain"
          />
        </Link>{" "}
        <nav className=" hidden md:flex gap-4 xl:gap-6 text-lg items-center">
          {links?.map((link) => (
            <Link
              aria-label={`Visit ${link.title} page`}
              className=" hover:text-primary relative group "
              href={link.url}
              key={link.title}
            >
              {link.title}
            </Link>
          ))}
        </nav>{" "}
        <div>
          <Button
            aria-label="Schedule a Call"
            className="shadow-lg shadow-primary "
          >
            Schedule a Call
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
