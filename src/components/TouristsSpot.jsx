import { useQuery } from "@tanstack/react-query";
import TouristSpot from "./TouristSpot";
import axios from "@/axios/axios";
import Loader from "./Loader";

export default function TouristsSpot() {
  const { data: tourists, isLoading } = useQuery({
    queryKey: ["tourists"],
    queryFn: async () => await axios.get("/tourists"),
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
        {isLoading ? (
          <div className="col-span-3 flex justify-center">
            <Loader />
          </div>
        ) : (
          tourists?.data?.data.map((item) => (
            <TouristSpot key={item._id} item={item} />
          ))
        )}
      </div>
    </div>
  );
}
