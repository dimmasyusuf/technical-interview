import { createBrowserRouter, redirect } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "landingpage",
        element: <LandingPage />,
      },
    ],
  },
]);

export default router;
