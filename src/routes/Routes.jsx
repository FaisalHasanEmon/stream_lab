import { createBrowserRouter } from "react-router-dom";
import WelcomeLayout from "../layouts/WelcomeLayout";
import SignIn from "../pages/authPages/SignIn/SignIn";
import SignUp from "../pages/authPages/SignUp/SignUp";
import VerifyEmail from "../pages/authPages/VerifyEmail/VerifyEmail";
import ForgetPassOtp from "../pages/authPages/ForgetPassOtp/ForgetPassOtp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomeLayout />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/verifyEmail",
    element: <VerifyEmail />,
  },
  {
    path: "/otp",
    element: <ForgetPassOtp />,
  },
]);

export default router;
