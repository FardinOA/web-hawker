import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const GetStarted = () => {
    return (
        <section className="w-[95%] mx-auto lg:w-full section_gap ">
            <div className="container bg-primary/70 text-primary-foreground  lg:h-96  rounded-3xl  relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 ">
                <div className="flex justify-start">
                    <Image
                        src={`/images/3d3.png`}
                        width={400}
                        height={0}
                        sizes="100"
                        alt="3d"
                        className="object-contain"
                    />
                </div>
                <div className="  flex justify-end">
                    <Image
                        src={`/images/3d4.png`}
                        width={400}
                        height={0}
                        sizes="100"
                        alt="3d"
                        className="object-contain"
                    />
                </div>

                <div className="bg-white/2 absolute inset-0 size-full backdrop-blur-md lg:rounded-3xl p-4 lg:p-8 flex justify-center items-center  ">
                    <div className="space-y-2">
                        <p className="text-3xl lg:text-5xl text-center">
                            Ready to Elevate Your Digital Presence?
                        </p>

                        <p className="text-center text-pretty text-gray-300 text-lg lg:text-xl tracking-wider ">
                            Let&apos;s create a website that&apos;s both
                            stunning and effective.
                        </p>

                        <div className="flex justify-center pt-8">
                            <Button
                                className="rounded-lg bg-primary-foreground text-primary hover:bg-primary-foreground/80 "
                                size={"lg"}
                            >
                                Contact Us Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
