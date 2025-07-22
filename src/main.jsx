import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./Components/AddCoffee";
import ErrorPage from "./Components/ErrorPage";
import CoffeeDetails from "./Components/CoffeeDetails";
import UpdateCoffee from "./Components/UpdateCoffee";
import Main from "./components/Main";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/coffees/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-3exr.onrender.com/coffees/${params.id}`
          ),
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-3exr.onrender.com/coffees/${params.id}`
          ),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
