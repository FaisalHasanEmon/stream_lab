import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const dashboard = [
    {
      id: "1",
      text: "Watch",
      icon: "/DashboardButtonIcons/watch.png",
      link: "/userDashboard/watch",
    },
    {
      id: "2",
      text: "My Library",
      icon: "/DashboardButtonIcons/myLibrary.png",
      link: "/userDashboard/my-library",
    },
    {
      id: "3",
      text: "ReelBux",
      icon: "/DashboardButtonIcons/reelBux.png",
      link: "/userDashboard/reelbux",
    },
    {
      id: "4",
      text: "Settings",
      icon: "/DashboardButtonIcons/settings.png",
      link: "/userDashboard/userSettings",
    },
  ];

  const creator = [
    {
      id: "1",
      text: "My Titles",
      icon: "/DashboardButtonIcons/myTitles.png",
      link: "/userDashboard/my-titles",
    },
    {
      id: "2",
      text: "Distro",
      icon: "/DashboardButtonIcons/distro.png",
      link: "/userDashboard/distro",
    },
    {
      id: "3",
      text: "AI Creator Lab",
      icon: "/DashboardButtonIcons/aiCreatorLab.png",
      link: "/userDashboard/ai-creator-lab",
    },
    {
      id: "4",
      text: "Submit",
      icon: "/DashboardButtonIcons/submit.png",
      link: "/userDashboard/submit",
    },
  ];

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="flex bg-blackPrimary font-poppins relative max-h-screen">
      <div>
        {/* ✅ Mobile Navbar */}
        <div
          hidden={isSidebarOpen ? true : false}
          className="fixed top-0 left-0 w-full bg-[#272727] flex justify-between items-center px-4 py-3 md:hidden z-50"
        >
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Menu size={24} />
          </button>
          <img src="/Logo/Logo.png" className="w-[100px]" alt="Logo" />
        </div>

        {/* ✅ Sidebar */}
        <div
          className={`bg-[#0F0F11] text-white transition-all duration-300 ease-in-out h-screen  flex flex-col fixed md:static inset-y-0 z-40 ${
            isSidebarCollapsed ? "w-16" : "w-64"
          } ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          {/* Sidebar Header */}
          <div className="p-4 flex justify-between items-center">
            {!isSidebarCollapsed && (
              <img src="/Logo/Logo.png" className="w-[120px]" alt="Logo" />
            )}
            <button
              onClick={() => {
                if (window.innerWidth < 768) {
                  setIsSidebarOpen(false); // Close on mobile
                } else {
                  setIsSidebarCollapsed(!isSidebarCollapsed); // Collapse on desktop
                }
              }}
              className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              {isSidebarCollapsed ? <Menu size={20} /> : <X size={20} />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-6 flex flex-col overflow-y-auto">
            {/* Dashboard Section */}
            <div className="space-y-2">
              {dashboard.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.link}
                  onClick={() => setIsSidebarOpen(false)} // Close on mobile click
                  className={({ isActive }) =>
                    `flex justify-start items-center gap-3 text-[#C6C6C6] text-[18px] p-2 rounded-[8px] transition-colors ${
                      isActive ? "bg-[#00A1FF] text-white" : "bg-[#272727]"
                    }`
                  }
                >
                  <img
                    src={item.icon}
                    alt="Button Icons"
                    className={`${
                      !isSidebarCollapsed ? "w-6 h-6" : "min-w-3 min-h-3"
                    }`}
                  />
                  <p hidden={isSidebarCollapsed}>{item.text}</p>
                </NavLink>
              ))}
            </div>

            {/* Creator Section */}
            {!isSidebarCollapsed && (
              <h3 className="text-xl font-semibold text-white tracking-wider my-5">
                Creator
              </h3>
            )}
            <div className="space-y-2">
              {creator.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.link}
                  onClick={() => setIsSidebarOpen(false)} // Close on mobile click
                  className={({ isActive }) =>
                    `flex justify-start items-center gap-3 text-[#C6C6C6] text-[18px] p-2 rounded-[8px] transition-colors ${
                      isActive ? "bg-[#00A1FF] text-white" : "bg-[#272727]"
                    }`
                  }
                >
                  <img
                    src={item.icon}
                    alt="Button Icons"
                    className={`${
                      !isSidebarCollapsed ? "w-6 h-6" : "min-w-3 min-h-3"
                    }`}
                  />
                  <p hidden={isSidebarCollapsed}>{item.text}</p>
                </NavLink>
              ))}
            </div>

            {/* Logout Button */}
            <div className="mt-auto">
              <button
                onClick={handleLogout}
                className="w-full flex justify-start items-center space-x-3 px-3 py-2.5 rounded-lg text-[18px] text-[#C6C6C6] bg-[#272727] hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                <img
                  src="/DashboardButtonIcons/logout.png"
                  className={`${
                    !isSidebarCollapsed ? "w-6 h-6" : "min-w-3 min-h-3"
                  }`}
                  alt="Logout Logo"
                />
                {!isSidebarCollapsed && <p>Logout</p>}
              </button>
            </div>
          </nav>
        </div>

        {/* ✅ Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}
      </div>

      {/* ✅ Main Content */}
      <div
        className={`flex-1 mt-[70px] md:mt-0 transition-all  duration-300 w-auto overflow-y-scroll
       `}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
