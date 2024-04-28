import About from "@/components/About";
import Banner from "@/components/Banner";
import BroweCountry from "@/components/BroweCountry";
import Reviews from "@/components/Reviews";
import TouristsSpot from "@/components/TouristsSpot";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <BroweCountry />
      <TouristsSpot />
      <Reviews />
    </div>
  );
}
