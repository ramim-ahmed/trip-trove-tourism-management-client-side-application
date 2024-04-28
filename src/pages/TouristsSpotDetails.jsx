import { Helmet } from "react-helmet-async";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function TouristsSpotDetails() {
  const navigate = useNavigate();
  const data = useLoaderData();
  const handleGoBack = () => {
    navigate(-1 || "/");
  };
  const {
    name,
    travel_time,
    country: { name: countryName },
    location,
    average_cost,
    total_visitor_per_year,
    seasonality,
    description,
    photo,
  } = data?.data?.data || {};
  return (
    <>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <div className="bg-[#f1f0f0a8] min-h-screen">
        <div className="max-w-6xl mx-auto px-3 py-10">
          <div
            onClick={() => handleGoBack()}
            className="flex items-center cursor-pointer space-x-2"
          >
            <FaArrowLeftLong className="w-6 h-6" />
            <p className="font-medium">GO BACK</p>
          </div>
          <div className="mt-4">
            <div className="relative">
              <img
                className="h-[450px] w-full object-cover rounded-md"
                src={photo}
                alt=""
              />
              <div className="absolute bottom-0 bg-black rounded-b-md w-full p-5 bg-opacity-50">
                <h1 className="text-2xl font-semibold text-white">{name}</h1>
              </div>
            </div>
            <div className="mt-4 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-6 text-white">
              <div className="bg-baseColor p-8 text-center flex justify-center items-center rounded-md">
                <div>
                  <h3 className="text-2xl font-medium">${average_cost}</h3>
                  <h6>Average Cost</h6>
                </div>
              </div>
              <div className="bg-baseColor p-8 text-center flex justify-center items-center rounded-md">
                <div>
                  <h3 className="text-2xl font-medium">{travel_time}</h3>
                  <h6>Travel Time</h6>
                </div>
              </div>
              <div className="bg-baseColor p-8 text-center flex justify-center items-center rounded-md">
                <div>
                  <h3 className="text-2xl font-medium">
                    {total_visitor_per_year}
                  </h3>
                  <h6>Total Visitor Per year</h6>
                </div>
              </div>
              <div className="bg-baseColor p-8 text-center flex justify-center items-center rounded-md">
                <div>
                  <h3 className="text-2xl font-medium">{seasonality}</h3>
                  <h6>Seasonality</h6>
                </div>
              </div>
              <div className="bg-baseColor p-8 text-center flex justify-center items-center rounded-md">
                <div>
                  <h3 className="text-2xl font-medium">{location}</h3>
                  <h6>Location</h6>
                </div>
              </div>
              <div className="bg-baseColor p-8 text-center flex justify-center items-center rounded-md">
                <div>
                  <h3 className="text-2xl font-medium">{countryName}</h3>
                  <h6>Country</h6>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 mt-5 rounded-md">
              <h1 className="text-xl font-medium">Description</h1>
              <p className="mt-2">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
