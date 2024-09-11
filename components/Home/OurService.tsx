import React from "react";
const OurService = () => {
  const services = [
    {
      title: "Custom Website Design",
      bg: "FF885B",
      description:
        "We specialize in crafting visually stunning, user-friendly websites tailored to showcase your products effectively. Our designs not only capture your brand's essence but also ensure seamless navigation for your audience.",
    },
    {
      title: "Landing Page Design",
      bg: `FADFA1`,
      description:
        "Maximize conversions with our high-performing landing pages. Whether you're launching a new product or running a marketing campaign, we create optimized landing pages that capture leads and drive engagement.",
    },

    {
      title: "Responsive Design",
      bg: `D2E0FB`,
      description:
        "In today's mobile-first world, we ensure that your website looks flawless on every device. From desktops to smartphones, our designs are responsive and optimized for performance across all screen sizes.",
    },
    {
      title: "SEO-Friendly Development",
      bg: `F7B5CA`,
      description:
        "Our websites are designed with search engines in mind. We follow the best SEO practices to ensure your site ranks higher, driving more traffic and potential customers to your business.",
    },
    {
      title: "UI/UX Optimization",
      bg: `FF8A8A`,
      description:
        "We prioritize user experience by integrating smooth interfaces and functionality. Our UI/UX strategies ensure visitors enjoy an effortless and engaging browsing experience.",
    },
    {
      title: "Website Maintenance & Support",
      bg: `9195F6`,
      description:
        "We provide ongoing website maintenance and support to keep your site running smoothly. From regular updates to security monitoring, we've got you covered.",
    },
  ];

  return (
    <section id="services" className="section_gap space-y-8 relative ">
      <h4 className="text-3xl uppercase lg:text-5xl text-center font-bold ">
        Our Services
      </h4>

      <div className="container max-w-6xl ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {services.map((service, index) => (
            <div
              style={{
                background: `#${service?.bg}`,
              }}
              className="border  pr-2 rounded-3xl hover:rounded-tl-[40px] space-y-6 overflow-hidden group transition-all duration-700 "
              key={`service-${index}`}
            >
              <div className="flex justify-between ">
                <div className="  transition-all duration-500 relative ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Teardrop"
                    width="80"
                    height="80"
                    viewBox="0 0 200 200"
                    className="rotate-180 absolute  top-4 left-4 lg:group-hover:top-0 lg:group-hover:left-0 transition-all duration-500 size-[50px] lg:size-[80px] "
                  >
                    <path
                      id="icon_25_"
                      d="M12 17v83c0 49.3 40.5 89.1 90.1 88 46.8-1.1 85-39.4 85.9-86.2.5-25-9.5-47.7-25.8-64C146.3 21.9 124.3 12 100 12H17c-2.7 0-5 2.3-5 5z"
                      fill='url("#SvgjsLinearGradient1048")'
                    ></path>
                    <defs>
                      <linearGradient id="SvgjsLinearGradient1048">
                        <stop stopColor="#dfe9f3" offset="0"></stop>
                        <stop stopColor="#8fa8c9" offset="1"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className="text-4xl lg:text-7xl 2xl:text-8xl opacity-50 transition-all duration-500 group-hover:rotate-45 pt-3 pr-2 ">
                  {index.toString().padStart(2, "0")}
                </p>
              </div>

              <div className="p-4 lg:p-8  space-y-4   ">
                <p className="text-2xl group-hover:text-2xl tracking-wider lg:translate-y-[150px] lg:group-hover:translate-y-0 transition-all duration-500  ">
                  {service?.title}
                </p>

                <p className="text-xl font-sans text-gray-800 text-pretty transition-all duration-500 lg:translate-y-[500px] lg:group-hover:translate-y-0  ">
                  {service?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
