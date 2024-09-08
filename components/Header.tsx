import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

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
    <header className="py-3 shadow">
      <div className="flex justify-between items-center container">
        <div>Logo</div>{" "}
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
