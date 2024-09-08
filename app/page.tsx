import GetStarted from "@/components/GetStarted";
import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import OurService from "@/components/Home/OurService";
import WhyUs from "@/components/Home/WhyUs";

export default function Home() {
    return (
        <main className="">
            <Hero />
            <About />
            <OurService />
            <WhyUs />
            {/* <TechStack /> */}
            <GetStarted />
        </main>
    );
}
