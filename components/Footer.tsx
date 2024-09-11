import { Facebook, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="section_gap bg-gradient-to-tr from-primary/10 to-primary/5 lg:rounded-3xl">
      <div className="container grid grid-cols-1 gap-8 divide-y-2 divide-[#5b38cf41]">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* About Us */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-5xl">Logo</p>
            <div className="space-y-1 font-sans">
              <p>
                At [Your Agency Name], we deliver custom web development and
                design solutions that drive results. Our focus is on creating
                user-centered digital experiences.
              </p>
            </div>
          </div>

          {/* Quick Links, Services, Contact */}
          <div className="lg:col-span-8 h-full">
            <div className="h-full grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 font-sans ">
                  <li>
                    <Link
                      aria-label="Visit Services Page"
                      href="#"
                      className="hover:text-primary"
                    >
                      Services
                    </Link>
                  </li>

                  <li>
                    <Link
                      aria-label="Visit Blog page"
                      href="/blog"
                      className="hover:text-primary"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      aria-label="Visit Contact Us page"
                      href="/contact"
                      className="hover:text-primary"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Our Services */}
              <div>
                <h4 className="text-xl font-bold mb-4">Our Services</h4>
                <ul className="space-y-2 font-sans">
                  <li>Custom Website Development</li>
                  <li>UI/UX Design</li>
                  <li>E-commerce Solutions</li>
                  <li>SEO & Digital Marketing</li>
                  <li>Website Maintenance & Support</li>
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h4 className="text-xl font-bold mb-4">Contact Us</h4>
                <div className="space-y-1 font-sans">
                  <p>Address: Street, City, State, Zip Code</p>
                  <p>Phone: +1 (123) 456-7890</p>
                  <p>Email: info@example.com</p>
                  <p>Hours: Monday - Friday 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 pt-4">
          <p className="tracking-wider">
            &copy; {new Date().getFullYear()} [Your Agency Name]. All rights
            reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            <a aria-label="Visit our linkedin page" href="#">
              <Button
                aria-label="Visit our linkedin page"
                size="icon"
                className=""
              >
                <Linkedin className="fill-white stroke-white stroke-1" />
              </Button>
            </a>
            <a aria-label="Visit our facebook page" href="#">
              <Button
                aria-label="Visit our facebook page"
                size="icon"
                className=""
              >
                <Facebook className="fill-white stroke-white stroke-1" />
              </Button>
            </a>
            <a aria-label="Visit our x account" href="#">
              <Button aria-label="Visit our x account" size="icon" className="">
                <Twitter className="fill-white stroke-white stroke-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
