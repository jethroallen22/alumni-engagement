import React from "react";

function Following() {
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
      <h1>Following</h1>

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
                <div className="bg-gray-300 hover:bg-gray-400 rounded-full text-gray-800 flex items-center justify-center pl-3 pr-3 pt-0.5 pb-0.5">
                  Unfollow
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Following;
