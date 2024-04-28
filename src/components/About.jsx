import aboutImage from "../assets/about.webp";
import { Button } from "./ui/button";
export default function About() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-3">
      <div className="grid grid-cols-12 items-center">
        <div className="lg:col-span-5 col-span-12">
          <div className="flex justify-center lg:justify-start">
            <img
              className="h-[450px] object-cover p-4 border border-baseColor"
              src={aboutImage}
              alt=""
            />
          </div>
        </div>
        <div className="lg:col-span-7 space-y-5 col-span-12 mt-10 lg:mt-0 text-center lg:text-start">
          <h4 className="text-xl">About US</h4>
          <h1 className="text-4xl font-semibold">
            We Are Best Tourism Agency in <br /> South Asia.
          </h1>
          <p>
            Trip Trove is a tourism management system (TMS) is a focus tourism
            service providers run and operate their enterprises. It is an entire
            platform that assists companies in streamlining processes,
            increasing efficiency, and improving customer support.
          </p>
          <Button className="bg-baseColor w-56">More About</Button>
        </div>
      </div>
    </div>
  );
}
