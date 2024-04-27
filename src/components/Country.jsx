/* eslint-disable react/prop-types */
import { Button } from "./ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
export default function Country({ item }) {
  return (
    <div className="relative hover:scale-105 duration-300 hover:duration-300">
      <div>
        <img
          className="w-full rounded-md h-96 object-cover "
          src={item?.photo}
          alt=""
        />
      </div>
      <div className="flex justify-center">
        <Button className="absolute bottom-3 w-72 bg-baseColor flex justify-between">
          <span>{item?.name}</span>
          <FaArrowRightLong className="w-6 h-6 text-white" />
        </Button>
      </div>
    </div>
  );
}
