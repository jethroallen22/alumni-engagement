import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Sidebar = ({ children }) => {
  const router = useRouter();
  return (
    <div className="w-full col-span-1 relative lg:h-[60vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
      <h1>Contacts</h1>
      <ul>
        <Link className="hover:text-blue-400" href={`/Parachute/Contacts`}>
          <li
            className={`hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer ${
              router.pathname == "/Parachute/Contacts" ? "bg-gray-50" : ""
            }`}
          >
            <div className="bg-gray-800 rounded-full h-8 w-8" />
            <div className="pl-2">
              <p className="text-gray-800 font-bold">Connections</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">321</p>
          </li>
        </Link>
        <Link
          className="hover:text-blue-500"
          href={`/Parachute/Contacts/Suggestions`}
        >
          <li
            className={`bg-white hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer ${
              router.pathname == "/Parachute/Contacts/Suggestions"
                ? "bg-gray-50"
                : ""
            }`}
          >
            <div className="bg-gray-800 rounded-full h-8 w-8"></div>
            <div className="pl-2">
              <p className="text-gray-800 font-bold">Suggestions</p>
            </div>
          </li>
        </Link>
        <Link
          className="hover:text-blue-500"
          href={`/Parachute/Contacts/Invitations`}
        >
          <li
            className={`bg-white hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer ${
              router.pathname == "/Parachute/Contacts/Invitations"
                ? "bg-gray-50"
                : ""
            }`}
          >
            <div className="bg-gray-800 rounded-full h-8 w-8"></div>
            <div className="pl-2">
              <p className="text-gray-800 font-bold">Invitations</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">16</p>
          </li>
        </Link>
        <Link
          className="hover:text-blue-500"
          href={`/Parachute/Contacts/Following`}
        >
          <li
            className={`bg-white hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer ${
              router.pathname == "/Parachute/Contacts/Following"
                ? "bg-gray-50"
                : ""
            }`}
          >
            <div className="bg-gray-800 rounded-full h-8 w-8"></div>
            <div className="pl-2">
              <p className="text-gray-800 font-bold">Following</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">321</p>
          </li>
        </Link>
        <Link
          className="hover:text-blue-500"
          href={`/Parachute/Contacts/Followers`}
        >
          <li
            className={`bg-white hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer ${
              router.pathname == "/Parachute/Contacts/Followers"
                ? "bg-gray-50"
                : ""
            }`}
          >
            <div className="bg-gray-800 rounded-full h-8 w-8"></div>
            <div className="pl-2">
              <p className="text-gray-800 font-bold">Followers</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">321</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
