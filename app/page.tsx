import GetStarted from "@/components/GetStarted";
import About from "@/components/Home/About";
import Blogs from "@/components/Home/Blogs";
import Faq from "@/components/Home/Faq";
import Hero from "@/components/Home/Hero";
import OurService from "@/components/Home/OurService";
import TechStack from "@/components/Home/TechStack";
import WhyUs from "@/components/Home/WhyUs";

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
