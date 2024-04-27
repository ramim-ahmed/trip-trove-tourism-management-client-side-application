import axios from "@/axios/axios";
import TouristSpot from "@/components/TouristSpot";
import { useState } from "react";
import { BsFilterRight } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Loader from "@/components/Loader";
import { useQuery } from "@tanstack/react-query";

export default function AllTouristsSpot() {
  const [sorted, setSorted] = useState("desc");
  const { data, isLoading } = useQuery({
    queryKey: ["tourists", sorted],
    queryFn: async () => axios.get(`/tourists/?average_cost=${sorted}`),
  });
  const allTouristsSpot = data?.data?.data;
  return (
    <div className="py-10 max-w-6xl mx-auto px-3">
      <div className="">
        <div className="bg-baseColor text-center p-6">
          <h1 className="text-center font-medium text-white text-xl">
            Our All Tourists Spot
          </h1>
        </div>
      </div>
      <div className="flex justify-end mt-10">
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex space-x-2 items-center w-28 border px-3 ">
              <BsFilterRight className="w-8 h-8" />
              <p className="text-base font-medium">Filter</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => setSorted("asc")}
                className="font-semibold cursor-pointer w-68"
              >
                Asc By Average Cost
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setSorted("desc")}
                className="font-semibold cursor-pointer w-68"
              >
                Desc By Average Cost
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {isLoading && (
        <div className="flex justify-center">
          <Loader />
        </div>
      )}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
        {allTouristsSpot?.map((item) => (
          <TouristSpot key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
