import axios from "@/axios/axios";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAuth from "@/hooks/useAuth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Loader from "@/components/Loader";
export default function MyLists() {
  const { authUser } = useAuth();
  const queryClient = useQueryClient();
  const { data: myLists, isLoading } = useQuery({
    queryKey: ["tourists"],
    queryFn: async () =>
      await axios.get(`/tourists/my-lists/?email=${authUser?.email}`),
  });

  const { mutateAsync: deleteTourist } = useMutation({
    mutationFn: async (id) => {
      return await axios.delete(`/tourists/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tourists"]);
    },
  });

  const handleDeleteTourist = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteTourist(id);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: error,
            text: "Tourist is deleted failed",
          });
        }
      }
    });
  };
  return (
    <div className="bg-[#f1f0f08c] py-20 min-h-screen">
      <div className="max-w-6xl mx-auto ">
        <div className="">
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">My Toursim Lists</h1>
              <Link to="/add-tourist-spot">
                <Button variant="outline">Add New Tourism Spot</Button>
              </Link>
            </div>
            <div className="bg-white p-5 mt-5">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead className="hidden lg:block">Name</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Average Cost</TableHead>
                    <TableHead>Seasonality</TableHead>
                    <TableHead>Travel Time</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading && (
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>
                        <Loader />
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  )}
                  {myLists?.data?.data?.length <= 0 ? (
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>Your Tourism Is Empty!!</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  ) : (
                    myLists?.data?.data?.map(
                      ({
                        _id,
                        name,
                        location,
                        country,
                        travel_time,
                        average_cost,
                        seasonality,
                      }) => (
                        <TableRow key={_id}>
                          <TableCell>01</TableCell>
                          <TableCell className="hidden lg:block">
                            {name}
                          </TableCell>
                          <TableCell>
                            {location}, {country?.name}
                          </TableCell>
                          <TableCell>${average_cost}</TableCell>
                          <TableCell>{seasonality}</TableCell>
                          <TableCell>{travel_time}</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger>
                                <BsThreeDotsVertical className="w-6 h-6 text-gray-600" />
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <Link to={`/tourists/udpate/${_id}`}>
                                  <DropdownMenuItem className="text-semibold cursor-pointer">
                                    Edit
                                  </DropdownMenuItem>
                                </Link>
                                <DropdownMenuItem
                                  onClick={() => handleDeleteTourist(_id)}
                                  className="text-semibold cursor-pointer"
                                >
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      )
                    )
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
