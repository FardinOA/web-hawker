import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";

const WhyUs = () => {
    const whyChooseUs = [
        {
            title: "Custom-Tailored Designs",
            description:
                "We create unique, visually stunning websites tailored to your brand, ensuring that your website stands out and aligns perfectly with your business goals.",
        },
        {
            title: "Conversion-Focused Approach",
            description:
                "Our designs are optimized to increase engagement and drive conversions, helping you turn visitors into loyal customers and boost your business growth.",
        },
        {
            title: "Mobile-First & Responsive",
            description:
                "We prioritize a mobile-first design strategy, ensuring your website looks and functions flawlessly across all devices, from smartphones to desktops.",
        },
        {
            title: "Ongoing Support & Maintenance",
            description:
                "We offer continuous website maintenance and support to keep your site secure, updated, and running smoothly, so you can focus on your business.",
        },
    ];

    const whyUsQuotes = [
        "Creative. Professional. Reliable.",
        "Tailored. Unique. Impactful.",
        "Responsive. Seamless. Flawless.",
        "Optimized. Engaging. Converting.",
        "Innovative. Functional. Beautiful.",
        "Supportive. Secure. Maintained.",
        "Fast. Efficient. Intuitive.",
        "User-focused. Goal-driven. Strategic.",
    ];

    return (
        <section className="section_gap">
            <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 2xl:gap-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  ">
                    {whyChooseUs.map((item, index) => (
                        <div
                            className={cn(
                                "  bg-black p-4 lg:p-6    ",
                                (index == 1 || index == 3) &&
                                    "lg:translate-y-10"
                            )}
                            key={`whyus-${index}`}
                        >
                            <div className="space-y-4">
                                <p className="text-4xl text-primary-foreground ">
                                    {item?.title}
                                </p>
                                <p className="text-white tracking-widest font-[300] font-sans  ">
                                    {item?.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className=" space-y-6 lg:space-y-8 lg:px-4 2xl:px-6">
                    <div className="space-y-4 pt-8">
                        <h5 className="font-sans text-2xl text-primary font-medium ">
                            WHY US
                        </h5>

                        <p className="text-3xl lg:text-5xl font-bold ">
                            Best Service You Can Get
                        </p>
                    </div>
                    <p className="font-sans font-lg ">
                        At our web design agency, we offer tailored solutions,
                        expert designs, and a commitment to excellence, ensuring
                        your online presence stands out and drives success.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-2xl">
                        {whyUsQuotes?.map((ele, ind) => (
                            <p
                                className="flex items-center gap-2 t "
                                key={`whyus-quote-${ind}`}
                            >
                                {" "}
                                <Check
                                    size={18}
                                    className="fill-primary stroke-primary"
                                />{" "}
                                {ele}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
