import { Facebook, Linkedin } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
    return (
        <footer className=" section_gap bg-gradient-to-tr from-primary/10 to-primary/5 lg:rounded-3xl   ">
            <div className="container grid grid-cols-1 gap-8 divide-y-2 divide-[#5b38cf41] ">
                <div className="h-40"></div>
                <div className="flex flex-col lg:flex-row justify-between gap-4 pt-4 ">
                    <p className="tracking-wider">
                        &copy; {new Date().getFullYear()} vivasoftltd. All
                        rights reserved.
                    </p>

                    <div className="flex items-center gap-3 ">
                        <a className=" " href="#">
                            <Button size={"icon"} className="">
                                {" "}
                                <Linkedin className=" fill-white stroke-white stroke-1 " />
                            </Button>
                        </a>
                        <a
                            className=" bg-white size-10 rounded-full flex justify-center items-center "
                            href="#"
                        >
                            <Button size={"icon"} className="">
                                {" "}
                                <Facebook className=" fill-white stroke-white stroke-1 " />
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
