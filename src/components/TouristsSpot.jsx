import TouristSpot from "./TouristSpot";

export default function TouristsSpot() {
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
        <TouristSpot />
        <TouristSpot />
        <TouristSpot />
        <TouristSpot />
        <TouristSpot />
        <TouristSpot />
      </div>
    </div>
  );
}
