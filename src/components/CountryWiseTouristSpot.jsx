import axios from "@/axios/axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsFilterRight } from "react-icons/bs";
import TouristSpot from "./TouristSpot";
import Loader from "./Loader";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
export default function CountryWiseTouristSpot() {
  const { id, country } = useParams();
  console.log(id, country);
  const navigate = useNavigate();
  const [sorted, setSorted] = useState("desc");
  const { data, isLoading } = useQuery({
    queryKey: ["tourists", sorted, id],
    queryFn: async () => axios.get(`/tourists/?country=${id}`),
  });
  const allTouristsSpot = data?.data?.data;
  const handleGoBack = () => {
    navigate(-1 || "/");
  };
  if (isLoading) {
    return (
      <div className="flex min-h-screen justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="py-10 max-w-6xl mx-auto px-3">
      <div className="">
        <div className="bg-baseColor text-center p-6">
          <h1 className="text-center font-medium text-white text-xl">
            {country}
          </h1>
        </div>
      </div>
      <div className="flex justify-end mt-10">
        {allTouristsSpot.length > 0 && (
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
        )}
      </div>
      {allTouristsSpot.length <= 0 && (
        <div className="text-center">
          <h1 className="text-xl">No Data Found!!</h1>
        </div>
      )}
      <div
        onClick={() => handleGoBack()}
        className="flex items-center cursor-pointer space-x-2"
      >
        <FaArrowLeftLong className="w-6 h-6" />
        <p className="font-medium">GO BACK</p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
        {allTouristsSpot?.map((item) => (
          <TouristSpot key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
