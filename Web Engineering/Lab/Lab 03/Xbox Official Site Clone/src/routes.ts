import { createBrowserRouter } from "react-router";
import { HomePage } from "./components/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "*",
    Component: HomePage, // Redirect all routes to homepage for now
  },
]);
