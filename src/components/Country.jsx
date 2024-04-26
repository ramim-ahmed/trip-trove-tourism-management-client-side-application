import { Button } from "./ui/button";

export default function Country() {
  return (
    <div className="relative hover:scale-105 duration-300 hover:duration-300">
      <div>
        <img
          className="w-full rounded-md h-96 object-cover "
          src="https://images.pexels.com/photos/3560020/pexels-photo-3560020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="flex justify-center">
        <Button className="absolute bottom-3 w-72 bg-baseColor flex justify-between">
          <span>Bangladesh</span>
          <span>4 Spots</span>
        </Button>
      </div>
    </div>
  );
}
