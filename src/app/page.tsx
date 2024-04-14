import UpcomingWebinars from "@/components/FeaturedCards";
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
       <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-whhite/[0.2]">
          
          <HeroSection />
          <FeaturedCourses/>
          <WhyChooseUs/>
          <TestimonialCards/>
          <UpcomingWebinars />
       </main>
  );
}
