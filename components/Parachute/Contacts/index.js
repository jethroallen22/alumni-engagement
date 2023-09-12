import React from "react";
import Sidebar from "./Sidebar";
import Connections from "./Connections";

function Contacts() {
  return (
    <div className="p-4 grid md:grid-cols-4 grid-cols-1 gap-4 h-fit">
      <div className="md:col-span-1 col-span-1">
        <Sidebar />
      </div>
      <div className="md:col-span-3 col-span-1">
        <Connections />
      </div>
    </div>
  );
}

export default Contacts;
