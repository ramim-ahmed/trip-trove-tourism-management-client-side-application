import { useQuery } from "@tanstack/react-query";
import TouristSpot from "./TouristSpot";
import axios from "@/axios/axios";
import Loader from "./Loader";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
export default function TouristsSpot() {
  const { data: tourists, isLoading } = useQuery({
    queryKey: ["tourists"],
    queryFn: async () => await axios.get(`/tourists`),
  });
  return (
    <div className="max-w-6xl mx-auto pb-20 px-3">
      <div>
        <h1 className="text-2xl text-center font-bold">
          Our Popular Tourists Spot
        </h1>
        <div className="flex justify-center mt-4">
          <div className="border-4 w-44 border-b border-baseColor"></div>
        </div>
      </div>
      {tourists?.data?.data.length <= 0 && (
        <div className="text-center mt-8">
          <h1 className="text-xl">No Data Found!!</h1>
        </div>
      )}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
        {isLoading ? (
          <div className="col-span-3 flex justify-center">
            <Loader />
          </div>
        ) : (
          tourists?.data?.data
            ?.slice(0, 6)
            .map((item) => <TouristSpot key={item._id} item={item} />)
        )}
      </div>
      {tourists?.data?.data.length > 6 && (
        <Link to="/all-tourists-spot" className="mt-10 flex justify-center">
          <Button variant="outline" className="w-72 border border-baseColor">
            View All Tourists Spot
          </Button>
        </Link>
      )}
    </div>
  );
}
