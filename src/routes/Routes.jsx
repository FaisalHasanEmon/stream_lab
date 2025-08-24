import { createBrowserRouter } from "react-router-dom";
import WelcomeLayout from "../layouts/WelcomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomeLayout />,
  },
]);

export default router;
