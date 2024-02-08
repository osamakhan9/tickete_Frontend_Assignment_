import { createBrowserRouter } from "react-router-dom";
import { Checkout } from "@/pages/Checkout";

export const router = createBrowserRouter([
  { path: "/", element: <Checkout /> },
]);
