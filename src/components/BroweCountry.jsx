import { useQuery } from "@tanstack/react-query";
import Country from "./Country";
import axios from "@/axios/axios";
import Loader from "./Loader";

export default function BroweCountry() {
  const { data: countries, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => await axios.get("/countries"),
  });
  return (
    <div className="max-w-6xl mx-auto pb-20 px-3">
      <div>
        <h1 className="text-2xl text-center font-bold">
          Browse Tourists Spot By Country
        </h1>
        <div className="flex justify-center mt-4">
          <div className="border-4 w-44 border-b border-baseColor"></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8">
        {isLoading ? (
          <div className="col-span-3 flex justify-center">
            <Loader />
          </div>
        ) : (
          countries?.data?.data.map((item) => (
            <Country key={item._id} item={item} />
          ))
        )}
      </div>
    </div>
  );
}
