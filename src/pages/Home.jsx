import About from "@/components/About";
import Banner from "@/components/Banner";
import BroweCountry from "@/components/BroweCountry";
import Reviews from "@/components/Reviews";
import TouristsSpot from "@/components/TouristsSpot";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Trip Trove | Home</title>
      </Helmet>
      <Banner />
      <About />
      <BroweCountry />
      <TouristsSpot />
      <Reviews />
    </div>
  );
}
