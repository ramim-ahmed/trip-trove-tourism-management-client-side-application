import axios from "@/axios/axios";
import TouristSpot from "@/components/TouristSpot";
import { useEffect, useState } from "react";
import { BsFilterRight } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import toast from "react-hot-toast";
import Loader from "@/components/Loader";

export default function AllTouristsSpot() {
  const [allTouristsSpot, setAllTouristsSpot] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sorted, setSorted] = useState("desc");
  useEffect(() => {
    const fetchAllTouristsSpot = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/tourists/?average_cost=${sorted}`);
        const data = await res.data?.data;
        setAllTouristsSpot(data);
        setLoading(false);
      } catch (error) {
        toast.error(error.message);
        setLoading(false);
      }
    };
    fetchAllTouristsSpot();
  }, [sorted]);
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
      {loading && (
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
