import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import slideOne from "../assets/slideOne.jpg";
import slideTwo from "../assets/slideTwo.jpg";
import slideThree from "../assets/slideThree.jpg";
import { Button } from "./ui/button";
export default function Banner() {
  return (
    <>
      <Swiper
        loop={true}
        navigation={true}
        speed={1200}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="bg-no-repeat w-full bg-center bg-cover h-[600px] flex justify-center items-center"
            style={{
              backgroundImage: `url(${slideOne})`,
            }}
          >
            <div className="text-center bg-gray-700 h-full w-full bg-opacity-50 flex justify-center items-center">
              <div className="space-y-4">
                <h1 className="text-2xl text-white">Discover The</h1>
                <h1 className="text-6xl font-bold text-white">
                  Adventure Best Tourism Spot In World
                </h1>
                <p className="text-xl text-white">
                  Your best Adventure Deals with <strong>Trip Trove</strong>
                </p>
                <Button className="w-52 text-base">Explore Now</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-no-repeat w-full bg-center bg-cover h-[600px] "
            style={{
              backgroundImage: `url(${slideTwo})`,
            }}
          >
            <div className="text-center bg-gray-700 h-full w-full bg-opacity-50 flex justify-center items-center">
              <div className="space-y-4">
                <h1 className="text-2xl text-white">Let&rsquo;s The</h1>
                <h1 className="text-6xl font-bold text-white">
                  Your Journery Begins Start Now.
                </h1>
                <p className="text-xl text-white">
                  We are committed place most expensible tour guide from{" "}
                  <strong>Trip Trove</strong>
                </p>
                <Button className="w-52 text-base">Explore Now</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-no-repeat w-full bg-center bg-cover h-[600px] "
            style={{
              backgroundImage: `url(${slideThree})`,
            }}
          >
            <div className="text-center bg-gray-700 h-full w-full bg-opacity-50 flex justify-center items-center">
              <div className="space-y-4">
                <h1 className="text-2xl text-white">Discover The</h1>
                <h1 className="text-6xl font-bold text-white">
                  Ultimate Tourism Planner
                </h1>
                <p className="text-xl text-white">
                  Your best Adventure Deals with <strong>Trip Trove</strong>
                </p>
                <Button className="w-52 text-base">Explore Now</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
