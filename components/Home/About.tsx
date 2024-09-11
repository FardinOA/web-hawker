import React from "react";

const About = () => {
  const data = [
    {
      title: "Innovative Web Solutions for Your Business",
      description:
        "We specialize in building cutting-edge websites that are both functional and visually appealing, designed to meet the evolving needs of your business. From concept to launch, we deliver tailored solutions that set you apart.",
    },
    {
      title: "Empowering Brands with User-Centered Design",
      description:
        "Our team creates intuitive, user-friendly designs that engage your audience and elevate your brand. Every detail is crafted with care, ensuring your website not only looks great but drives results.",
    },
    {
      title: "Grow Your Business with Scalable Web Development",
      description:
        "Whether you're a startup or a growing enterprise, we provide scalable web development services that grow with your business. Our focus is on delivering long-term value through robust, future-proof solutions.",
    },
  ];

  return (
    <section
      style={{
        backgroundImage: "url('/images/3d7.png')",
      }}
      className=" overflow-hidden  pt-5 lg:pt-40 2xl:pt-60 bg-no-repeat bg-contain  relative lg:h-[70vh] bg-dot-black/[.1]  "
    >
      <div className="absolute size-full inset-0 bg-background/30 backdrop-blur-sm "></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute    bottom-40  -right-96 -z-10 transform-gpu overflow-hidden  blur-3xl  "
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg]  bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="container">
        <div className="   lg:grid lg:grid-cols-3 space-y-4 lg:space-y-0   lg:gap-4  ">
          {data?.map((ele, ind) => (
            <div
              key={`about-${ind}`}
              className="rounded-lg bg-white/50 backdrop-blur-sm p-4 space-y-4 lg:space-y-6 lg:p-10 grid grid-rows-subgrid row-start-1 row-end-3 "
            >
              <div>
                <p className="text-xl lg:text-2xl">{ele?.title}</p>
              </div>
              <div>
                <p className="font-sans text-pretty text-primary ">
                  {" "}
                  {ele.description}
                </p>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" container mt-4  ">
        <div className="bg-white/50 backdrop-blur-sm   text-center  rounded-md ">
          <p className="bg-white rounded-md p-4">
            Customize you product as you need!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
