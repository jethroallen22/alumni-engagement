import moment from "moment";
import { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import FileUpload from "../FileUpload";
import AddMember from "./AddMember";
import Papa from "papaparse";

const Table = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Kaya Johnston",
      status: "Alumni",
      course: "BS Information Technology",
      year_graduated: "2010",
    },
    {
      id: 2,
      name: "Brenda Stephens",
      status: "Student",
      course: "BS Political Science",
      year_graduated: "",
    },
    {
      id: 3,
      name: "Cohen Hunter",
      status: "Alumni",
      course: "BA Economics",
      year_graduated: "2015",
    },
    {
      id: 4,
      name: "Tara Conley",
      status: "Alumni",
      course: "BA Economics",
      year_graduated: "2009",
    },
    {
      id: 5,
      name: "Skyler Travis",
      status: "Alumni",
      course: "BA Economics",
      year_graduated: "2021",
    },
    {
      id: 6,
      name: "Tyrese Bender",
      status: "Alumni",
      course: "BA Pschology",
      year_graduated: "2012",
    },
    {
      id: 7,
      name: "Jaydon Robertson",
      status: "Alumni",
      course: "BS Information Science",
      year_graduated: "2014",
    },
    {
      id: 8,
      name: "Kira Velasquez",
      status: "Alumni",
      course: "BS Computer Science",
      year_graduated: "2019",
    },
    {
      id: 9,
      name: "Kenyon Gilmore",
      status: "Alumni",
      course: "BS Computer Engineering",
      year_graduated: "2020",
    },
    {
      id: 10,
      name: "Antony Nguyen",
      status: "Alumni",
      course: "BS Mechanical Engineering",
      year_graduated: "2011",
    },
  ]);

  const [filteredData, setFilteredData] = useState([]);
  const [searchKey, setSearchkey] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [newName, setNewName] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [newYearGraduated, setNewYearGraduated] = useState("");
  const [newCourse, setNewCourse] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);
  const [toggleKellyBot, setToggleKellyBot] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [entryContext, setEntryContext] = useState(null);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [course, setCourse] = useState("");
  const [yearGraduated, setYearGraduated] = useState(0);
  const [downloadData, setDownloadData] = useState(null);

  const handleEdit = (id) => {
    const row = data.find((item) => item.id === id);
    setEditingId(id);
    setNewName(row.name);
    setNewStatus(row.status);
    setNewCourse(row.course);
    setNewYearGraduated(row.year_graduated);
  };

  const handleUpdate = () => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === editingId) {
          return {
            ...item,
            name: newName,
            status: newStatus,
            course: newCourse,
            year_graduated: newYearGraduated,
          };
        }
        return item;
      })
    );
    setEditingId(null);
    setNewName("");
    setNewStatus("");
    setNewCourse("");
    setNewYearGraduated("");
  };

  const handleAdd = () => {
    setShowAddModal(!showAddModal);
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleSort = (key) => {
    setData((prevData) =>
      [...prevData].sort((a, b) => (a[key] > b[key] ? 1 : -1))
    );
  };

  const handleFilter = (e) => {
    setSearchkey(e.target.value.toLowerCase());
  };

  const showUploadModal = () => {
    setUploadModal(!uploadModal);
  };

  useEffect(() => {
    if (searchKey) {
      const filteredData = data.filter(
        (item) =>
          item.name.toLowerCase().startsWith(searchKey) ||
          item.status.toLowerCase().startsWith(searchKey) ||
          item.course.toLowerCase().startsWith(searchKey) ||
          item.year_graduated.toLowerCase().startsWith(searchKey)
      );
      setFilteredData(filteredData);
    } else {
      setFilteredData(data);
    }
    if (downloadData) {
      const filename = `Alumni Data ${moment().format("YYYY-MM-DD")}.csv`;
      const csvData = Papa.unparse(downloadData); // Convert array of objects to CSV format
      const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
      const csvURL = URL.createObjectURL(blob);

      // Create a link element to trigger the download
      const tempLink = document.createElement("a");
      tempLink.href = csvURL;
      tempLink.setAttribute("download", filename);
      tempLink.click();
    }
  }, [searchKey, data, downloadData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { text: inputValue, sender: "user" },
    ]);
    setInputValue("");
    if (entryContext === null) {
      // Initial query
      if (inputValue.trim() === "/help") {
        const textHelp = [
          'Add entry: To add a new entry to the database, simply type "add" followed by the necessary details you want to include. (eg: add John Doe)',
          'Edit entry: To make changes to an existing entry, type "edit" along with the entry\'s name. (eg: edit John Doe',
          'Delete entry: If you wish to remove an entry from the database, type "delete" followed by the entry\'s name. (eg: delete John Doe)',
          'Deduplicate entry: To remove duplicate entries from the database, use the "deduplicate" followed by the entry\'s name. (eg: deduplicate John Doe)',
          'Download data: To download the whole Alumni Data file, type "download data" to proceed with the download.',
        ];
        for (const help of textHelp) {
          setChatMessages((prevMessages) => [
            ...prevMessages,
            { text: help, sender: "bot" },
          ]);
        }
      } else if (inputValue.includes("add")) {
        const tempName = inputValue.substring(4);
        setName(tempName);
        setEntryContext("add");
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { text: "Please enter the status", sender: "bot" },
        ]);
      } else if (inputValue.includes("edit")) {
        const tempName = inputValue.substring(4).trim();
        setName(tempName);
        console.log(tempName);
        setEntryContext("edit");
        const editEntry = data.find(
          (entry) => entry.name.toLowerCase() === tempName.toLowerCase()
        );
        if (editEntry) {
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Name:  ${editEntry.name}`,
              sender: "bot",
            },
          ]);
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Status:  ${editEntry.status}`,
              sender: "bot",
            },
          ]);
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Course:  ${editEntry.course}`,
              sender: "bot",
            },
          ]);
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Year Graduated:  ${editEntry.year_graduated}`,
              sender: "bot",
            },
          ]);
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Please select one field and type "name" if you want to the edit name, "status" if you want to edit the status, "course" if you wat to edit the course, or "year" if you want to edit the year graduated, followed by the necessary details you want to include. (eg: name John Doe)' `,
              sender: "bot",
            },
          ]);
        } else {
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Apologies, it appears that I'm unable to locate the entry you're referring to. Would you mind rephrasing or providing additional context? This will help me provide you with better assistance. Let's begin anew.`,
              sender: "bot",
            },
          ]);
          setEntryContext(null);
        }
      } else if (inputValue.includes("delete")) {
        const tempName = inputValue.substring(6).trim();
        setName(tempName);
        console.log(tempName);
        setEntryContext("delete");
        const deleteEntry = data.find(
          (entry) => entry.name.toLowerCase() === tempName.toLowerCase()
        );
        if (deleteEntry) {
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Name:  ${deleteEntry.name}`,
              sender: "bot",
            },
          ]);
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Status:  ${deleteEntry.status}`,
              sender: "bot",
            },
          ]);
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Course:  ${deleteEntry.course}`,
              sender: "bot",
            },
          ]);
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Year Graduated:  ${deleteEntry.year_graduated}`,
              sender: "bot",
            },
          ]);
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Are you sure to delete this entry? Type Yes or No.`,
              sender: "bot",
            },
          ]);
        } else {
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Apologies, it appears that I'm unable to locate the entry you're referring to. Would you mind rephrasing or providing additional context? This will help me provide you with better assistance. Let's begin anew.`,
              sender: "bot",
            },
          ]);
          setEntryContext(null);
        }
      } else if (inputValue.includes("deduplicate")) {
        const tempName = inputValue.substring(11).trim();
        setName(tempName);
        setEntryContext("deduplicate");
        const editEntry = data.find(
          (entry) => entry.name.toLowerCase() === tempName.toLowerCase()
        );
        if (editEntry) {
          const countDuplicates = () => {
            const duplicatesCount = data.filter((entry) => {
              return entry.name.toLowerCase() === editEntry.name.toLowerCase();
            }).length;

            return duplicatesCount;
          };
          const duplicatesCount = countDuplicates();
          console.log(duplicatesCount);
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `It appears that ${editEntry.name} appeared ${duplicatesCount} times. Are you sure to remove duplicated entries? Type Yes or No.`,
              sender: "bot",
            },
          ]);
        } else {
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Apologies, it appears that I'm unable to locate the entry you're referring to. Would you mind rephrasing or providing additional context? This will help me provide you with better assistance. Let's begin anew.`,
              sender: "bot",
            },
          ]);
          setEntryContext(null);
        }
      } else if (inputValue.toLowerCase() === "download data") {
        setEntryContext("download");
        setChatMessages((prevMessages) => [
          ...prevMessages,
          {
            text: `Are you sure you want to proceed with the download? Type Yes or No.`,
            sender: "bot",
          },
        ]);
      } else {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          {
            text: `Apologies, it seems I'm having difficulty understanding your request. Could you please rephrase or provide more context so I can assist you better? Let's start again.`,
            sender: "bot",
          },
        ]);
        setEntryContext(null);
      }
    } else {
      if (entryContext === "add") {
        setStatus(inputValue);
        console.log(status);
        setEntryContext("add_status");
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { text: "Please enter the full course name", sender: "bot" },
        ]);
      } else if (entryContext === "add_status") {
        setCourse(inputValue);
        console.log(course);
        setEntryContext("add_course");
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { text: "Please enter the year graduated", sender: "bot" },
        ]);
      } else if (entryContext === "add_course") {
        setYearGraduated(inputValue);
        console.log(yearGraduated);
        setEntryContext(null);
        setChatMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Entry has been successfully added to the database. Thank you!",
            sender: "bot",
          },
        ]);
        const addEntry = {
          id: data.length + 1,
          name: name,
          status: status,
          course: course,
          year_graduated: inputValue,
        };
        setData((prevData) => [...prevData, addEntry]);
      } else if (entryContext === "edit") {
        setEntryContext("edit_field");
        if (inputValue.includes("name")) {
          const newName = inputValue.substring(5).trim();
          setData((prevData) =>
            prevData.map((entry) => {
              if (entry.name.toLowerCase() === name.toLowerCase()) {
                return { ...entry, name: newName };
              }
              return entry;
            })
          );
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Do you want to continue? Type "Yes" or "No".`,
              sender: "bot",
            },
          ]);
        } else if (inputValue.includes("status")) {
          const newStatus = inputValue.substring(7);
          setData((prevData) =>
            prevData.map((entry) => {
              if (entry.name.toLowerCase() === name.toLowerCase()) {
                return { ...entry, status: newStatus };
              }
              return entry;
            })
          );
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Do you want to continue? Type "Yes" or "No".`,
              sender: "bot",
            },
          ]);
        } else if (inputValue.includes("course")) {
          const newCourse = inputValue.substring(7);
          setData((prevData) =>
            prevData.map((entry) => {
              if (entry.name.toLowerCase() === name.toLowerCase()) {
                return { ...entry, course: newCourse };
              }
              return entry;
            })
          );
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Do you want to continue? Type "Yes" or "No".`,
              sender: "bot",
            },
          ]);
        } else if (inputValue.includes("year")) {
          const newYearGraduated = inputValue.substring(5);
          setData((prevData) =>
            prevData.map((entry) => {
              if (entry.name.toLowerCase() === name.toLowerCase()) {
                return { ...entry, year_graduated: newYearGraduated };
              }
              return entry;
            })
          );
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Do you want to continue? Type "Yes" or "No".`,
              sender: "bot",
            },
          ]);
        } else {
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Apologies, it seems I'm having difficulty understanding your request. Could you please rephrase or provide more context so I can assist you better? Let's start again.`,
              sender: "bot",
            },
          ]);
          setEntryContext(null);
        }
      } else if (entryContext === "edit_field") {
        if (inputValue.toLowerCase() === "yes") {
          const editEntry = data.find(
            (entry) => entry.name.toLowerCase() === name.toLowerCase()
          );
          if (editEntry) {
            setChatMessages((prevMessages) => [
              ...prevMessages,
              {
                text: `Name:  ${editEntry.name}`,
                sender: "bot",
              },
            ]);
            setChatMessages((prevMessages) => [
              ...prevMessages,
              {
                text: `Status:  ${editEntry.status}`,
                sender: "bot",
              },
            ]);
            setChatMessages((prevMessages) => [
              ...prevMessages,
              {
                text: `Course:  ${editEntry.course}`,
                sender: "bot",
              },
            ]);
            setChatMessages((prevMessages) => [
              ...prevMessages,
              {
                text: `Year Graduated:  ${editEntry.year_graduated}`,
                sender: "bot",
              },
            ]);
            setChatMessages((prevMessages) => [
              ...prevMessages,
              {
                text: `Please select one field and type "name" if you want to the edit name, "status" if you want to edit the status, "course" if you wat to edit the course, or "year" if you want to edit the year graduated, followed by the necessary details you want to include. (eg: name John Doe)' `,
                sender: "bot",
              },
            ]);
            setEntryContext("edit");
          } else {
            setChatMessages((prevMessages) => [
              ...prevMessages,
              {
                text: `Apologies, it seems I'm having difficulty understanding your request. Could you please rephrase or provide more context so I can assist you better? Let's start again.`,
                sender: "bot",
              },
            ]);
            setEntryContext(null);
          }
        } else if (inputValue.toLowerCase() === "no") {
          setEntryContext(null);
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: "Entry has been successfully updated to the database. Thank you!",
              sender: "bot",
            },
          ]);
        } else {
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Apologies, it seems I'm having difficulty understanding your request. Could you please rephrase or provide more context so I can assist you better? Let's start again.`,
              sender: "bot",
            },
          ]);
          setEntryContext(null);
        }
      } else if (entryContext === "delete") {
        if (inputValue.toLowerCase() === "yes") {
          setData((prevData) =>
            prevData.filter(
              (item) => item.name.toLowerCase() !== name.toLowerCase()
            )
          );
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: "Entry has been successfully deleted from the database. Thank you!",
              sender: "bot",
            },
          ]);
          setEntryContext(null);
        } else if (inputValue.toLowerCase() === "no") {
          setEntryContext(null);
        } else {
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Apologies, it seems I'm having difficulty understanding your request. Could you please rephrase or provide more context so I can assist you better? Let's start again.`,
              sender: "bot",
            },
          ]);
          setEntryContext(null);
        }
      } else if (entryContext === "deduplicate") {
        if (inputValue.toLowerCase() === "yes") {
          const uniqueId = data.find(
            (entry) => entry.name.toLowerCase() === name.toLowerCase()
          ).id;
          console.log("id: " + uniqueId);
          setData((prevData) => {
            const uniqueEntry = prevData.filter(
              (entry) =>
                entry.name !==
                  data.find((e) => e.name.toLowerCase() === name.toLowerCase())
                    .name || entry.id === uniqueId
            );
            return uniqueEntry;
          });
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: "Duplicated entries have been successfully removed from the database. Thank you!",
              sender: "bot",
            },
          ]);
          setEntryContext(null);
        } else if (inputValue.toLowerCase() === "no") {
          setEntryContext(null);
        } else {
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Apologies, it seems I'm having difficulty understanding your request. Could you please rephrase or provide more context so I can assist you better? Let's start again.`,
              sender: "bot",
            },
          ]);
          setEntryContext(null);
        }
      } else if (entryContext === "download") {
        if (inputValue.toLowerCase() === "yes") {
          setDownloadData(data);
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: "Your download will begin shortly. Thank you for your patience!",
              sender: "bot",
            },
          ]);
          setEntryContext(null);
        } else if (entryContext.toLowerCase() === "no") {
          setEntryContext(null);
        } else {
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              text: `Apologies, it seems I'm having difficulty understanding your request. Could you please rephrase or provide more context so I can assist you better? Let's start again.`,
              sender: "bot",
            },
          ]);
          setEntryContext(null);
        }
      }
    }
  };

  const handleCommandCLick = (command) => {
    setInputValue("");
    if (command.trim() === "Add an entry") {
      const help =
        'Add entry: To add a new entry to the database, simply type "add" followed by the necessary details you want to include. (eg: add John Doe)';
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { text: help, sender: "bot" },
      ]);
    } else if (command.trim() === "Edit an entry") {
      const help =
        'Edit entry: To make changes to an existing entry, type "edit" along with the entry\'s name. (eg: edit John Doe';
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { text: help, sender: "bot" },
      ]);
    } else if (command.trim() === "Delete an entry") {
      const help =
        'Delete entry: If you wish to remove an entry from the database, type "delete" followed by the entry\'s name. (eg: delete John Doe)';
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { text: help, sender: "bot" },
      ]);
    } else if (command.trim() === "Deduplicate uploaded database") {
      const help =
        'Deduplicate entry: To remove duplicate entries from the database, use the "deduplicate" followed by the entry\'s name. (eg: deduplicate John Doe)';
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { text: help, sender: "bot" },
      ]);
    } else {
      const help =
        'Download data: To download the whole Alumni Data file, type "download data" to proceed with the download.';
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { text: help, sender: "bot" },
      ]);
    }
  };

  const commands = [
    "Add an entry",
    "Edit an entry",
    "Delete an entry",
    "Deduplicate an entry",
    "Download data",
  ];

  return (
    <>
      <AddMember
        modalOpen={showAddModal}
        setModalOpen={setShowAddModal}
        saveData={setData}
        members={data}
      />
      <FileUpload
        modalOpen={uploadModal}
        setModalOpen={setUploadModal}
        saveData={setData}
        members={data}
      />
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={handleFilter}
          className="border border-gray-300 rounded-md p-2 mb-4"
        />

        <CSVLink
          data={filteredData}
          filename={`Alumni Data ${moment().format("YYYY-MM-DD")}.xlsx`}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md ml-2"
        >
          Download Data
        </CSVLink>

        <button
          onClick={showUploadModal}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1.5 rounded-md ml-2"
        >
          Upload Data
        </button>

        <button
          onClick={handleAdd}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-md float-right"
        >
          Add New
        </button>

        <table className="table-auto bg-white w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Course</th>
              <th className="border px-4 py-2">Year Graduated</th>
              <th className="border px-4 py-2 w-[200px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {!filteredData.length > 0 && searchKey && (
              <tr key={1}>
                <td colSpan={4} className="border px-4 py-2 text-center">
                  No records for {searchKey}
                </td>
              </tr>
            )}
            {filteredData.length > 0 &&
              filteredData.map((item) => (
                <tr key={item.id}>
                  <td className="border px-4 py-2">
                    {item.id === editingId ? (
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                      />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {item.id === editingId ? (
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={newStatus}
                        onChange={(e) => setNewStatus(e.target.value)}
                      />
                    ) : (
                      item.status
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {item.id === editingId ? (
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={newCourse}
                        onChange={(e) => setNewCourse(e.target.value)}
                      />
                    ) : (
                      item.course
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {item.id === editingId ? (
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={newYearGraduated}
                        onChange={(e) => setNewYearGraduated(e.target.value)}
                      />
                    ) : (
                      item.year_graduated
                    )}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {item.id === editingId ? (
                      <>
                        <button
                          onClick={handleUpdate}
                          className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md mr-2"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(item.id)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="relative">
        <div className="fixed bottom-0 right-0 mb-4 mr-4">
          <img
            src="https://elysian01.github.io/Rasa-Chatbot-UI/static/img/bot-logo.png"
            alt="Bot Avatar"
            className={`w-10 h-10 p-1 mr-2 rounded-t-lg rounded-l-lg bg-[#1D4354] shadow-lg hover:drop-shadow-xl ${
              toggleKellyBot ? "animate-fadeOut" : "animate-fadeIn"
            }`}
            onClick={() => {
              setToggleKellyBot((prev) => !prev);
            }}
          />
        </div>
        {toggleKellyBot && (
          <div className="dropdown relative animate-fadeIn">
            <div className="w-80 h-4/6 flex flex-col items-center justify-center max-h-full fixed bottom-0 right-0 mb-4 mr-4 drop-shadow-xl">
              <div className="w-full h-12 bg-[#1D4354] rounded-t-lg flex items-center relative">
                <h2 className="text-white font-medium ml-4">Kelly Bot</h2>
                <div
                  className="w-4 h-0.5 bg-white absolute right-4 hover:bg-gray-300 hover:drop-shadow-xl"
                  onClick={() => {
                    setToggleKellyBot((prev) => !prev);
                  }}
                ></div>
              </div>
              <div className="w-full h-5/6 pt-4 pb-4 border overflow-y-scroll bg-white">
                <div className="flex items-center">
                  <div className="ml-6 mr-4 mt-2 mb-1 text-left flex">
                    <div className="w-8 h-8 mr-2"></div>
                    <span
                      className="text-white px-2 py-1 rounded bg-gray-400"
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      Hello! I'm Kelly your friendly chat bot.\nHow can I assist
                      you today?
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="ml-2 mr-4 mb-1 text-left flex items-center">
                    <img
                      src="https://elysian01.github.io/Rasa-Chatbot-UI/static/img/bot-logo.png"
                      alt="Bot Avatar"
                      className="w-8 h-8 mr-2 rounded-full object-contain"
                    />
                    <span
                      className="text-white px-2 py-1 rounded bg-gray-400"
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      To get you started, type "/help" to view the full list of
                      commands or you can choose from the commands below.
                    </span>
                  </div>
                </div>
                <div>
                  {commands.map((command, commandIndex) => (
                    <div key={commandIndex} className="flex items-center">
                      <div className="ml-4 mr-4 mb-1 text-left flex ">
                        <div className="w-8 h-8 mr-2"></div>
                        <span
                          onClick={() => {
                            handleCommandCLick(command);
                          }}
                          className={
                            "text-white px-2 py-1 rounded-full bg-emerald-400 drop-shadow-lg hover:bg-emerald-600"
                          }
                        >
                          {command}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                {chatMessages.map((chatMessage, index) => (
                  <div
                    key={index}
                    className={`ml-4 mr-4 mt-1 mb-1 ${
                      chatMessage.sender === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    {chatMessage.sender === "bot" && (
                      <>
                        <div className="flex items-center">
                          {index === chatMessages.length - 1 ||
                          chatMessages[index + 1]?.sender !== "bot" ? (
                            <img
                              src="https://elysian01.github.io/Rasa-Chatbot-UI/static/img/bot-logo.png"
                              alt="Bot Avatar"
                              className="w-8 h-8 mr-2 rounded-full object-contain"
                            />
                          ) : (
                            <div className="w-8 h-8 mr-2"></div>
                          )}
                          <span
                            className={`text-white px-2 py-1 rounded w-4/6 ${
                              chatMessage.sender === "user"
                                ? "bg-blue-600"
                                : "bg-gray-400"
                            }`}
                          >
                            {chatMessage.text}
                          </span>
                        </div>
                      </>
                    )}
                    {chatMessage.sender === "user" && (
                      <span
                        className={`text-white px-2 py-1 rounded ${
                          chatMessage.sender === "user"
                            ? "bg-blue-600"
                            : "bg-gray-400"
                        }`}
                      >
                        {chatMessage.text}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="w-full flex">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full p-2 border rounded-b-lg -mr-4 "
                />
                <button className="ml-2 p-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-l-md rounded-b-md float-right">
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Table;
