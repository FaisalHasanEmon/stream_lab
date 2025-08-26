import { createBrowserRouter } from "react-router-dom";
import WelcomeLayout from "../layouts/WelcomeLayout";
import SignIn from "../pages/authPages/SignIn/SignIn";
import SignUp from "../pages/authPages/SignUp/SignUp";
import VerifyEmail from "../pages/authPages/VerifyEmail/VerifyEmail";
import ForgetPassOtp from "../pages/authPages/ForgetPassOtp/ForgetPassOtp";
import UserDashboardLayout from "../layouts/UserDashboardLayout";
import Watch from "../pages/userDashboardPages/watch/Watch";
import MyLibrary from "../pages/userDashboardPages/myLibrary/MyLibrary";
import ReelBux from "../pages/userDashboardPages/reelbux/ReelBux";
import UserSettings from "../pages/userDashboardPages/userSettings/UserSettings";
import MyTitles from "../pages/userDashboardPages/mytitles/MyTitles";
import UserDistro from "../pages/userDashboardPages/userDistro/UserDistro";
import AiCreatorLab from "../pages/userDashboardPages/aiCreatorLab/AiCreatorLab";
import Submit from "../pages/userDashboardPages/submit/Submit";

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
  {
    path: "/userDashboard",
    element: <UserDashboardLayout />,
    children: [
      {
        path: "/userDashboard/watch",
        element: <Watch />,
      },
      {
        path: "/userDashboard/my-library",
        element: <MyLibrary />,
      },
      {
        path: "/userDashboard/reelbux",
        element: <ReelBux />,
      },
      {
        path: "/userDashboard/userSettings",
        element: <UserSettings />,
      },
      {
        path: "/userDashboard/my-titles",
        element: <MyTitles />,
      },
      {
        path: "/userDashboard/distro",
        element: <UserDistro />,
      },
      {
        path: "/userDashboard/ai-creator-lab",
        element: <AiCreatorLab />,
      },
      {
        path: "/userDashboard/submit",
        element: <Submit />,
      },
    ],
  },
]);

export default router;
