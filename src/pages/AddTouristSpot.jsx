import axios from "@/axios/axios";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useAuth from "@/hooks/useAuth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BarLoader } from "react-spinners";

export default function AddTouristSpot() {
  const [loading, setLoading] = useState(false);
  const { authUser } = useAuth();
  const queryClient = useQueryClient();
  const { data: countries } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => await axios.get("/countries"),
  });
  const { mutateAsync: addNewTourist } = useMutation({
    mutationFn: async (data) => {
      return await axios.post("/tourists/create-new", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tourists"]);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [seasonality, setSeasonality] = useState("");
  const [country, setCountry] = useState("");
  const countryItem = countries?.data?.data.map((item) => (
    <SelectItem key={item._id} value={item._id}>
      {item.name}
    </SelectItem>
  ));
  const handleNewTouristSpot = async (data) => {
    const {
      name,
      location,
      average_cost,
      travel_time,
      total_visitor_per_year,
      description,
      photo,
    } = data;
    const newData = {
      user: {
        name: authUser?.displayName,
        email: authUser?.email,
      },
      name,
      country,
      location,
      average_cost: Number(average_cost),
      seasonality,
      travel_time,
      total_visitor_per_year,
      description,
      photo,
    };
    setLoading(true);
    try {
      await addNewTourist(newData);
      toast.success("New Tourist Spot created Successfully!!");
      reset();
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="max-w-6xl mx-auto bg-[#f1f0f042] border-baseColor border border-opacity-15 my-20 p-10">
      <h1 className="text-center text-xl font-semibold">
        Create New Tourist Spot
      </h1>
      <form onSubmit={handleSubmit(handleNewTouristSpot)} className="mt-5">
        <div className="grid grid-cols-12 gap-x-8">
          <div className="mb-4 lg:col-span-6 col-span-12">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              {...register("name", { required: true })}
              placeholder="Enter Name"
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
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
                <SelectValue placeholder="Select Country" />
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
              type="text"
              id="location"
              name="location"
              className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.location && (
              <span className="text-red-500">This field is required</span>
            )}
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
              type="number"
              id="average_cost"
              name="average_cost"
              className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.average_cost && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className=" mb-4 lg:col-span-6 col-span-12">
            <label
              htmlFor="seasonality"
              className="leading-7 text-sm text-gray-600"
            >
              Seasonality
            </label>
            <Select onValueChange={(value) => setSeasonality(value)}>
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
              type="text"
              id="travel_time"
              name="travel_time"
              className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.travel_time && (
              <span className="text-red-500">This field is required</span>
            )}
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
              type="text"
              id="total_visitor_per_year"
              name="total_visitor_per_year"
              className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.total_visitor_per_year && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="relative mb-4 lg:col-span-6 col-span-12">
            <label htmlFor="photo" className="leading-7 text-sm text-gray-600">
              Phot URL
            </label>
            <input
              {...register("photo", { required: true })}
              placeholder="Enter Photo URL"
              type="url"
              id="photo"
              name="photo"
              className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.photo && (
              <span className="text-red-500">This field is required</span>
            )}
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
              type="text"
              id="description"
              name="description"
              className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
            {errors.description && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="w-56 bg-baseColor">
            {loading ? <BarLoader color="#ffffff" /> : "Add Now"}
          </Button>
        </div>
      </form>
    </div>
  );
}
