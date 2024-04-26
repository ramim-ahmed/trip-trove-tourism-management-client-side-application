import RootLayout from "@/layouts/RootLayout";
import AddTouristSpot from "@/pages/AddTouristSpot";
import AllTouristsSpot from "@/pages/AllTouristsSpot";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Register from "@/pages/Register";
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
        path: "/add-tourist-spot",
        element: <AddTouristSpot />,
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
