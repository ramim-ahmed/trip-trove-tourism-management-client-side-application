import PrivateRoute from "@/PrivateRoute/PrivateRoute";
import axios from "@/axios/axios";
import RootLayout from "@/layouts/RootLayout";
import AddTouristSpot from "@/pages/AddTouristSpot";
import AllTouristsSpot from "@/pages/AllTouristsSpot";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import MyLists from "@/pages/MyLists";
import NotFound from "@/pages/NotFound";
import Register from "@/pages/Register";
import TouristsSpotDetails from "@/pages/TouristsSpotDetails";
import UpdateTourist from "@/pages/UpdateTourist";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-tourists-spot",
        element: <AllTouristsSpot />,
      },
      {
        path: "/tourist-spot/details/:id",
        element: <TouristsSpotDetails />,
        loader: async ({ params }) =>
          await axios.get(`/tourists/${params?.id}`),
      },
      {
        path: "/add-tourist-spot",
        element: (
          <PrivateRoute>
            <AddTouristSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-lists",
        element: (
          <PrivateRoute>
            <MyLists />
          </PrivateRoute>
        ),
      },
      {
        path: "/tourists/udpate/:id",
        element: (
          <PrivateRoute>
            <UpdateTourist />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await axios.get(`/tourists/${params?.id}`),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default routes;
