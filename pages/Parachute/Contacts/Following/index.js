import React from "react";
import Navbar from "@/components/Parachute/Navbar";
import Sidebar from "@/components/Parachute/Contacts/Sidebar";
import Footer from "@/components/Parachute/Footer";
import Following from "@/components/Parachute/Contacts/Following";

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
            <Following />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default index;
