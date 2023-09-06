export default function History() {
  const recent_members = [
    {
      name: "Kaya Johnston",
      status: "Alumni",
      year_graduated: "2010",
      date: "2 hours ago",
    },
    {
      name: "Brenda Stephens",
      status: "Student",
      year_graduated: "",
      date: "1 hour ago",
    },
    {
      name: "Cohen Hunter",
      status: "Alumni",
      year_graduated: "2015",
      date: "45 mins ago",
    },
    {
      name: "Tara Conley",
      status: "Alumni",
      year_graduated: "2009",
      date: "30 mins ago",
    },
    {
      name: "Skyler Travis",
      status: "Alumni",
      year_graduated: "2021",
      date: "15 mins ago",
    },
    {
      name: "Tyrese Bender",
      status: "Alumni",
      year_graduated: "2012",
      date: "8 mins ago",
    },
    {
      name: "Jaydon Robertson",
      status: "Alumni",
      year_graduated: "2014",
      date: "few seconds ago",
    },
  ];

  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1>Recent Members</h1>
      <ul>
        {recent_members.map((member, id) => (
          <li
            key={id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="pl-4">
              <p className="text-gray-800 font-bold">{member.name}</p>
              <p className="text-gray-400 text-sm">
                {member.status} {member.year_graduated ?? member.year_graduated}
              </p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">
              {member.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
