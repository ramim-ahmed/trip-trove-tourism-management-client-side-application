import axios from "@/axios/axios";
import { Button } from "@/components/ui/button";
import { FaArrowLeftLong } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";
export default function UpdateTourist() {
  const queryClient = useQueryClient();
  const selectedTouristSpot = useLoaderData();
  const [seasonality, setSeasonality] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const {
    _id,
    name,
    seasonality: selectedSeasonality,
    location,
    average_cost,
    total_visitor_per_year,
    travel_time,
    description,
    country: selectedCountry,
    photo,
  } = selectedTouristSpot?.data?.data || {};
  const { data: countries } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => await axios.get("/countries"),
    refetchOnMount: true,
  });

  const { mutateAsync: updateTouristSpot } = useMutation({
    mutationFn: async (data) => {
      return await axios.patch(`/tourists/${_id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tourists"]);
    },
  });

  const countryItem = countries?.data?.data.map((item) => (
    <SelectItem key={item._id} value={item._id}>
      {item.name}
    </SelectItem>
  ));
  const handleUpdatedTouristSpot = async (data) => {
    const {
      name,
      location,
      average_cost,
      travel_time,
      total_visitor_per_year,
      description,
      photo,
    } = data;
    const updatedData = {
      name,
      country: country || selectedCountry?._id,
      location,
      average_cost: Number(average_cost),
      seasonality: seasonality || selectedSeasonality,
      travel_time,
      total_visitor_per_year,
      description,
      photo,
    };
    setLoading(true);
    try {
      await updateTouristSpot(updatedData);
      toast.success("Tourist Spot Updated Successfully!!");
      setLoading(false);
    } catch (error) {
      toast.success(error.message);
      setLoading(false);
    }
  };
  const handleGoBack = () => {
    navigate(-1 || "/");
  };
  return (
    <>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <div className="my-14">
        <div className="max-w-6xl mx-auto px-3">
          <div
            onClick={() => handleGoBack()}
            className="flex items-center cursor-pointer space-x-2"
          >
            <FaArrowLeftLong className="w-6 h-6" />
            <p className="font-medium">GO BACK</p>
          </div>
        </div>
        <div className="max-w-6xl mt-5 mx-auto bg-[#f1f0f042] border-baseColor border border-opacity-15 lg:p-10 py-10 px-3">
          <div>
            <h1 className="text-center text-xl font-semibold">
              Update Tourist Spot
            </h1>
          </div>
          <form
            onSubmit={handleSubmit(handleUpdatedTouristSpot)}
            className="mt-5"
          >
            <div className="grid grid-cols-12 gap-x-8">
              <div className=" mb-4 lg:col-span-6 col-span-12">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  defaultValue={name}
                  placeholder="Enter Name"
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className=" mb-4 lg:col-span-6 col-span-12">
                <label
                  htmlFor="country"
                  className="leading-7 text-sm text-gray-600"
                >
                  Country
                </label>
                <Select onValueChange={(value) => setCountry(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={selectedCountry?.name} />
                  </SelectTrigger>
                  <SelectContent>{countryItem}</SelectContent>
                </Select>
              </div>
              <div className=" mb-4 lg:col-span-6 col-span-12">
                <label
                  htmlFor="location"
                  className="leading-7 text-sm text-gray-600"
                >
                  Location
                </label>
                <input
                  {...register("location", { required: true })}
                  placeholder="Enter Location"
                  defaultValue={location}
                  type="text"
                  id="location"
                  name="location"
                  className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className=" mb-4 lg:col-span-6 col-span-12">
                <label
                  htmlFor="average_cost"
                  className="leading-7 text-sm text-gray-600"
                >
                  Average Cost
                </label>
                <input
                  {...register("average_cost", { required: true })}
                  placeholder="Enter Average Cost"
                  defaultValue={average_cost}
                  type="number"
                  id="average_cost"
                  name="average_cost"
                  className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className=" mb-4 lg:col-span-6 col-span-12">
                <label
                  htmlFor="seasonality"
                  className="leading-7 text-sm text-gray-600"
                >
                  Seasonality
                </label>
                <Select
                  defaultValue={selectedSeasonality}
                  onValueChange={(value) => setSeasonality(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Seasonality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Summer">Summer</SelectItem>
                    <SelectItem value="Winter">Winter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className=" mb-4 lg:col-span-6 col-span-12">
                <label
                  htmlFor="travel_time"
                  className="leading-7 text-sm text-gray-600"
                >
                  Travel Time
                </label>
                <input
                  {...register("travel_time", { required: true })}
                  placeholder="Enter Travel Time"
                  defaultValue={travel_time}
                  type="text"
                  id="travel_time"
                  name="travel_time"
                  className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className=" mb-4 lg:col-span-6 col-span-12">
                <label
                  htmlFor="total_visitor_per_year"
                  className="leading-7 text-sm text-gray-600"
                >
                  Total Visitor Per Year
                </label>
                <input
                  {...register("total_visitor_per_year", { required: true })}
                  placeholder="Enter Total Visit Per Year"
                  defaultValue={total_visitor_per_year}
                  type="text"
                  id="total_visitor_per_year"
                  name="total_visitor_per_year"
                  className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className=" mb-4 lg:col-span-6 col-span-12">
                <label
                  htmlFor="photo"
                  className="leading-7 text-sm text-gray-600"
                >
                  Phot URL
                </label>
                <input
                  {...register("photo", { required: true })}
                  placeholder="Enter Photo URL"
                  defaultValue={photo}
                  type="url"
                  id="photo"
                  name="photo"
                  className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className=" mb-4 col-span-12">
                <label
                  htmlFor="description"
                  className="leading-7 text-sm text-gray-600"
                >
                  Short Description
                </label>
                <textarea
                  {...register("description", { required: true })}
                  placeholder="Enter Description"
                  defaultValue={description}
                  type="text"
                  id="description"
                  name="description"
                  className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor h-28 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="w-56 bg-baseColor">
                {loading ? <BarLoader color="#ffffff" /> : "Update Now"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
