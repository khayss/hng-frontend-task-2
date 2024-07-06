import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./module/pages/Home";
import Products from "./module/pages/Products";
import MainLayout from "./module/Layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);
