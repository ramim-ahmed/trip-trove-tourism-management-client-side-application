import { Button } from "./ui/button";
import { PiMapPinLineLight } from "react-icons/pi";
export default function TouristSpot() {
  return (
    <div className="border border-baseColor p-2 rounded">
      <div>
        <img
          className="w-full h-[400px] object-cover rounded "
          src="https://images.pexels.com/photos/11717756/pexels-photo-11717756.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
      </div>
      <div className="mt-4 space-y-4">
        <h1 className="text-2xl font-bold">
          Discover the beautiful jungle place
        </h1>
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <PiMapPinLineLight className="w-6 h-6" />
            <h2 className="text-xl">Sundarban</h2>
          </div>
          <div>
            <h1 className="text-xl">$1200</h1>
          </div>
        </div>
        <Button className=" bg-baseColor w-full rounded-none">
          View Details
        </Button>
      </div>
    </div>
  );
}
