import React from "react";

function Invitations() {
  const connections = [
    {
      name: "John Smith",
      about: "I love coding!",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae enim fringilla, volutpat dolor quis, convallis lectus. Vestibulum eget imperdiet diam. Nunc turpis metus, malesuada quis lorem eget, dictum malesuada est. Phasellus semper leo sapien, a fermentum nulla ornare ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum in imperdiet elit.",
    },
    {
      name: "Jane Doe",
      about: "Passionate about design.",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae enim fringilla, volutpat dolor quis, convallis lectus. Vestibulum eget imperdiet diam. Nunc turpis metus, malesuada quis lorem eget, dictum malesuada est. Phasellus semper leo sapien, a fermentum nulla ornare ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum in imperdiet elit.",
    },
    {
      name: "Michael Johnson",
      about: "Travel enthusiast.",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae enim fringilla, volutpat dolor quis, convallis lectus. Vestibulum eget imperdiet diam. Nunc turpis metus, malesuada quis lorem eget, dictum malesuada est. Phasellus semper leo sapien, a fermentum nulla ornare ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum in imperdiet elit.",
    },
    {
      name: "Emily Brown",
      about: "Music lover.",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae enim fringilla, volutpat dolor quis, convallis lectus. Vestibulum eget imperdiet diam. Nunc turpis metus, malesuada quis lorem eget, dictum malesuada est. Phasellus semper leo sapien, a fermentum nulla ornare ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum in imperdiet elit.",
    },
    {
      name: "Daniel Wilson",
      about: "Nature explorer.",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae enim fringilla, volutpat dolor quis, convallis lectus. Vestibulum eget imperdiet diam. Nunc turpis metus, malesuada quis lorem eget, dictum malesuada est. Phasellus semper leo sapien, a fermentum nulla ornare ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum in imperdiet elit.",
    },
  ];
  return (
    <div className="w-full col-span-3 relative min-h-[60vh] m-auto p-4 border rounded-lg bg-white">
      <h1>Invitations</h1>

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
                <p className="text-gray-400 text-sm truncate w-[650px]">
                  {connection.message}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center mt-4 mb-4">
                <div className="bg-gray-700 hover:bg-gray-800 rounded-full text-white flex items-center justify-center pl-3 pr-3 pt-0.5 pb-0.5 hover:bg-gray-800">
                  Confirm
                </div>
                <div className="bg-transparent rounded-full ml-2 border border-gray-800 text-gray-800 flex items-center justify-center pl-3 pr-3 pt-0.5 pb-0.5 hover:bg-gray-800 hover:text-white">
                  Delete
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Invitations;
