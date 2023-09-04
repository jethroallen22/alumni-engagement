import React from "react";

function Followers() {
  const connections = [
    {
      name: "John Smith",
      email: "john.smith@example.com",
      status: "Following",
    },
    {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      status: "Following",
    },
    {
      name: "Michael Johnson",
      email: "michael.j@example.com",
      status: "Follow",
    },
    {
      name: "Emily Brown",
      email: "emily.b@example.com",
      status: "Follow",
    },
    {
      name: "Daniel Wilson",
      email: "daniel.w@example.com",
      status: "Follow",
    },
  ];
  return (
    <div className="w-full col-span-3 relative min-h-[60vh] m-auto p-4 border rounded-lg bg-white">
      <h1>Followers</h1>

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
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center mt-4 mb-4">
                <div
                  className={`rounded-full text-gray-800 flex items-center justify-center pl-3 pr-3 pt-0.5 pb-0.5 ${
                    connection.status === "Following"
                      ? "bg-gray-300 hover:bg-gray-400"
                      : "bg-gray-700 hover:bg-gray-800 text-white"
                  }`}
                >
                  {connection.status}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Followers;
