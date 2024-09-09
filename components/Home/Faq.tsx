import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqs = [
    {
      question: "Why is this mobile app the best solution for your business?",
      answer: `This mobile app offers a comprehensive set of features that streamline business operations, improve customer engagement, and enhance overall productivity. It provides seamless integration with existing systems, supports real-time data analytics, and allows for customized user experiences tailored to the specific needs of your business. Additionally, the app is designed with a focus on security, scalability, and ease of use, ensuring that it grows with your business and remains reliable.`,
    },
    {
      question: "What can I learn from using this app?",
      answer: `Using this app, you'll gain valuable insights into your business processes through data analytics tools that track customer behavior, sales trends, and operational efficiency. The app also offers tutorials and user guides to help you maximize its potential, ensuring you can leverage its full range of features. Furthermore, regular updates and tips provide ongoing education about new features and best practices.`,
    },
    {
      question: "What is the price of the app?",
      answer: `The app is available through a tiered pricing structure to accommodate businesses of all sizes. A free trial version is available, followed by subscription plans starting at $9.99 per month for small businesses and scaling up based on the number of users and the extent of advanced features required. Custom enterprise packages are also available upon request, which can be tailored to your specific needs.`,
    },
    {
      question: "Which gadgets can I upload to my app?",
      answer: `You can upload a variety of gadgets to the app, such as smart sensors, wearables, and IoT devices that enhance the functionality of the app. These gadgets can be used to gather real-time data, automate tasks, or enhance communication within your organization. The app supports a wide range of third-party devices and allows easy integration through a user-friendly interface.`,
    },
    {
      question: "Why is this mobile app the best solution for your business?",
      answer: `This mobile app simplifies your day-to-day operations by automating routine tasks and providing tools that help you manage everything from customer relations to inventory tracking in one place. Its cloud-based infrastructure ensures that your data is secure and accessible from anywhere, while customizable dashboards give you real-time visibility into business performance.`,
    },
  ];

  return (
    <section
      style={{
        backgroundImage: "url('/images/3d6.png')",
        backgroundSize: 800,
      }}
      className="    pt-5 lg:pt-40 2xl:pt-60 bg-no-repeat bg-contain bg-right relative  "
    >
      {/* <div className="absolute inset-0 size-full bg-white/30 backdrop-blur-sm "></div> */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="container space-y-6 lg:space-y-8  ">
        <h6 className="text-3xl lg:text-5xl font-bold text-center ">
          Help & FAQ.
        </h6>
        <div className="max-w-3xl mx-auto">
          <Accordion className="space-y-2" type="single" collapsible>
            {faqs?.map((ele, ind) => (
              <AccordionItem
                className="  border-b-0"
                key={`faqs-${ind}`}
                value={`faqs-${ind}`}
              >
                <AccordionTrigger className=" bg-primary/30 backdrop-blur-md rounded-lg px-4 text-lg lg:text-xl uppercase hover:no-underline hover:bg-white/30 [&[data-state=open]]:bg-white/30 [&[data-state=open]]:rounded-b-none  ">
                  {ele.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 font-sans text-sm lg:text-base bg-white/30 backdrop-blur-md ">
                  {ele?.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
