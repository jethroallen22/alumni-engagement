import React from "react";

function Connections() {
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
      <h1>Connections</h1>
      <div className="relative mt-2">
        <input
          type="text"
          className="bg-gray-100 text-gray-800 w-full rounded-full py-2 px-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search Connections"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 15l5.991-5.991M9.732 15.964A6.5 6.5 0 015.5 10c0-1.969.905-3.725 2.317-4.893A6.5 6.5 0 1112 18.5a6.5 6.5 0 01-2.268-1.536"
            ></path>
          </svg>
        </div>
      </div>
      <ul>
        {connections.map((connection, id) => (
          <li
            key={id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center">
              <div className="bg-gray-800 rounded-full h-16 w-16"></div>
              <div className="pl-4">
                <p className="text-gray-800 font-bold">{connection.name}</p>
                <p className="text-gray-800 text-sm">{connection.email}</p>
                <p className="text-gray-400 text-sm">{connection.about}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-transparent rounded-full border border-gray-800 text-gray-800 flex items-center justify-center pl-3 pr-3 pt-0.5 pb-0.5 hover:bg-gray-800 hover:text-white">
                Message
              </div>
              <div className="flex items-center ml-4">
                <div className="bg-gray-800 rounded-full h-1 w-1 mr-1"></div>
                <div className="bg-gray-800 rounded-full h-1 w-1 mr-1"></div>
                <div className="bg-gray-800 rounded-full h-1 w-1 mr-1"></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Connections;
