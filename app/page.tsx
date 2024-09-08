import GetStarted from "@/components/GetStarted";
import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <div className="h-dvh  "></div>

      <GetStarted />
    </main>
  );
}
