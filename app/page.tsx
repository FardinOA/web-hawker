import GetStarted from "@/components/GetStarted";
import About from "@/components/Home/About";
import Blogs from "@/components/Home/Blogs";
import Faq from "@/components/Home/Faq";
import Hero from "@/components/Home/Hero";
import OurService from "@/components/Home/OurService";
import TechStack from "@/components/Home/TechStack";
import WhyUs from "@/components/Home/WhyUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web",
  description: "web",
};

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <OurService />
      <WhyUs />
      <TechStack />
      <Blogs />
      <GetStarted />
      <Faq />
    </main>
  );
}
