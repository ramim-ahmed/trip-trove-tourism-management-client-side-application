/* eslint-disable react/prop-types */
import { Button } from "./ui/button";
import { PiMapPinLineLight } from "react-icons/pi";
import { MdAccessTime } from "react-icons/md";
export default function TouristSpot({ item }) {
  const { name } = item;
  return (
    <div className="border border-baseColor border-opacity-15 p-2 rounded flex flex-col justify-between">
      <div>
        <img
          className="w-full h-[250px] object-cover rounded "
          src={item?.photo}
          alt=""
        />
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
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <MdAccessTime className="w-5 h-5" />
            <p>{item?.travel_time}</p>
          </div>
          <div>
            <h1 className="text-base text-baseColor">$1200</h1>
          </div>
        </div>
        <Button className=" bg-baseColor w-full rounded-none">
          View Details
        </Button>
      </div>
    </div>
  );
}
