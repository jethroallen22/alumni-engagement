import React from "react";
import Sidebar from "./Sidebar";
import Connections from "./Connections";

function Suggestions() {
  const connections = [
    {
      name: "John Smith",
      about: "I love coding!",
      email: "john.smith@example.com",
    },
    {
      name: "Jane Doe",
      about: "Passionate about design.",
      email: "jane.doe@example.com",
    },
    {
      name: "Michael Johnson",
      about: "Travel enthusiast.",
      email: "michael.j@example.com",
    },
    {
      name: "Emily Brown",
      about: "Music lover.",
      email: "emily.b@example.com",
    },
    {
      name: "Daniel Wilson",
      about: "Nature explorer.",
      email: "daniel.w@example.com",
    },
  ];

  return (
    <div className="w-full col-span-3 relative min-h-[60vh] m-auto p-4 border rounded-lg bg-white">
      <h1>Suggestions</h1>
      <ul className="flex flex-wrap items-center">
        {connections.map((connection, id) => (
          <li
            key={id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 flex  justify-between cursor-pointer w-52 h-auto m-1"
          >
            <div>
              <div className="bg-gray-400 rounded-lg h-24 w-52"></div>
              <div className="text-center flex flex-col items-center">
                <div className="bg-gray-800 rounded-full h-20 w-20 -mt-10"></div>
                <p className="text-gray-800 font-bold">{connection.name}</p>
                <p className="text-gray-800 text-sm">{connection.email}</p>
                <p className="text-gray-400 text-sm">{connection.about}</p>
                <div className="flex items-center mt-4 mb-4">
                  <div className="bg-gray-700 hover:bg-gray-800 rounded-full text-white flex items-center justify-center pl-3 pr-3 pt-0.5 pb-0.5 hover:bg-gray-800">
                    Connect
                  </div>
                  <div className="bg-transparent rounded-full ml-2 border border-gray-800 text-gray-800 flex items-center justify-center pl-3 pr-3 pt-0.5 pb-0.5 hover:bg-gray-800 hover:text-white">
                    Message
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Suggestions;
