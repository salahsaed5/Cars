import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Notfound from "./Components/Notfound/Notfound";
import Home from "./Components/Home/Home";
import CarDetails from "./Components/CarDetails/CarDetails";
import Allvehicles from "./Components/AllVehicles/Allvehicles";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Notfound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "details",
          element: <CarDetails />,
        },
        {
          path: "all-vehicles",
          element: <Allvehicles />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
