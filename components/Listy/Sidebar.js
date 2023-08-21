import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Sidebar = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white w-64 min-h-screen ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <h1 className="py-5 px-20 text-2xl font-bold">LISTY</h1>
        <ul className="py-10">
          <li
            className={`px-20 py-2 text-white ${
              router.pathname == "/Listy" ? "bg-red-500" : ""
            }`}
          >
            <Link className="hover:text-blue-500" href={`/Listy`}>
              Dashboard
            </Link>
          </li>
          <li
            className={`px-20 py-2 text-white ${
              router.pathname == "/Listy/Management" ? "bg-red-500" : ""
            }`}
          >
            <Link className="hover:text-blue-500" href={`/Listy/Management`}>
              Management
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10">{children}</main>

      {/* Sidebar toggle button */}
      <button
        className={`fixed ${
          isSidebarOpen ? "left-[220px]" : "left-[-25px]"
        } top-[250px] z-20 p-4 m-4 text-white bg-gray-800 rounded-md`}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "<" : ">"}
      </button>
    </div>
  );
};

export default Sidebar;
