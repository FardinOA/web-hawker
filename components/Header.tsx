import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  const links = [
    {
      title: "Services",
      url: "#",
    },
    {
      title: "Blog",
      url: "#",
    },
    {
      title: "Contact",
      url: "#",
    },
  ];
  return (
    <header className="py-3 shadow sticky top-0 left-0 z-10 bg-white/50 backdrop-blur-md ">
      <div className="flex justify-between items-center container">
        <div>
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
        </div>{" "}
        <nav className=" hidden md:flex gap-4 text-lg items-center">
          {links?.map((link) => (
            <Link
              className=" hover:text-primary "
              href={link.url}
              key={link.title}
            >
              {link.title}
            </Link>
          ))}
        </nav>{" "}
        <div>
          <Button className="shadow-lg shadow-primary ">Schedule a Call</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
