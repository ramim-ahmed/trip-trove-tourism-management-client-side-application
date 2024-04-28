/* eslint-disable react/prop-types */
import { Button } from "./ui/button";
import { PiMapPinLineLight } from "react-icons/pi";
import { MdAccessTime } from "react-icons/md";
import { MdOutlineDisabledVisible } from "react-icons/md";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
export default function TouristSpot({ item }) {
  const { name } = item;
  return (
    <Fade>
      <div className="border border-baseColor border-opacity-15 p-2 rounded flex flex-col justify-between] hover:scale-105 duration-300 hover:duration-300">
        <div className="relative">
          <img
            className="w-full h-[250px] object-cover rounded "
            src={item?.photo}
            alt=""
          />
          <p className="absolute top-0 bg-black bg-opacity- text-white font-semibold px-3 py-1">
            {item?.seasonality}
          </p>
        </div>
        <div className="mt-4 space-y-4">
          <h1 className="text-2xl">{name}</h1>
          <div>
            <div className="flex items-center space-x-2">
              <PiMapPinLineLight className="w-5 h-5" />
              <h2 className="text-base">
                {item?.location}, {item?.country?.name}
              </h2>
            </div>
          </div>
          <div className="">
            <div className="flex items-center space-x-2">
              <MdAccessTime className="w-5 h-5" />
              <p>{item?.travel_time}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MdOutlineDisabledVisible className="w-6 h-6" />
              <p>Visit: {item?.total_visitor_per_year}/yr</p>
            </div>
            <div>
              <h1 className="text-base text-baseColor font-semibold">
                ${item?.average_cost}
              </h1>
            </div>
          </div>
          <div>
            <Link to={`/tourist-spot/details/${item?._id}`}>
              <Button className=" bg-baseColor w-full rounded-none">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
}
