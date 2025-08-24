import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
const StreamLabApp = () => {
  return <RouterProvider router={router} />;
};

export default StreamLabApp;
