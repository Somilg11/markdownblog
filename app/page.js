// import Navbar from "@/components/Navbar";

import Hero from "@/components/hero";
import Plans from "@/components/plans";
import { Preview } from "@/components/preview";
import { Testimonial } from "@/components/testimonial";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Preview/>
      {/* <Plans/> */}
      <Testimonial/>
    </main>
  );
}
