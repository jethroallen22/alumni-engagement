import React from "react";
import Navbar from "@/components/Parachute/Navbar";
import Footer from "@/components/Parachute/Footer";
import Invitations from "@/components/Parachute/Contacts/Invitations";
import Sidebar from "@/components/Parachute/Contacts/Sidebar";

function index() {
  return (
    <div className="bg-gray-100 flex flex-col">
      <div className="flex-grow">
        <Navbar />
        <div className="p-4 grid md:grid-cols-4 grid-cols-1 gap-4">
          <div className="md:col-span-1 col-span-1">
            <Sidebar />
          </div>
          <div className="md:col-span-3 col-span-1">
            <Invitations />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default index;
