import Header from "@/src/components/Header/Header";
import Hero from "@/src/components/Hero/Hero";
import Slider from "@/src/components/Slider/Slider";
import FeatureProperties from "@/src/components/FeatureProperties/FeatureProperties";
import TopProperties from "@/src/components/TopProperties/TopProperties";
import HowItWork from "@/src/components/HowItWork/HowItWork";
// import TopCities from "@/src/components/TopCities/TopCities";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Slider />
      <FeatureProperties />
      <TopProperties />
      <HowItWork />
      {/* <TopCities /> */}
    </>
  );
}
