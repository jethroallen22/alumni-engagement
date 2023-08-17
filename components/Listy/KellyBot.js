import { useEffect } from "react";
import { useState } from "react";
import moment from "moment";
import Papa from "papaparse";

const KellyBot = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [entryContext, setEntryContext] = useState(null);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [course, setCourse] = useState("");
  const [yearGraduated, setYearGraduated] = useState(0);
  const [downloadData, setDownloadData] = useState(null);

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
      name: "Kaya Johnston",
      status: "Alumni",
      course: "BS Information Technology",
      year_graduated: "2010",
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

  useEffect(() => {
    console.log("Updated data:", data);
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
  }, [data, downloadData]);

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
    "Deduplicate uploaded database",
    "Download data",
  ];

  return (
    <div className="w-full h-5/6 flex flex-col items-center justify-center max-h-full">
      <div className="w-full h-96 pt-4 pb-4 border overflow-y-scroll bg-white rounded-lg">
        <div className="flex items-center">
          <div className="ml-4 mr-4 mt-2 mb-1 text-left flex">
            <div className="w-8 h-8 mr-2"></div>
            <span
              className="text-white px-2 py-1 rounded bg-gray-400"
              style={{ whiteSpace: "pre-wrap" }}
            >
              Hello! I'm Kelly your friendly chat bot.\nHow can I assist you
              today?
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="ml-4 mr-4 mb-1 text-left flex items-center">
            <img
              src="https://elysian01.github.io/Rasa-Chatbot-UI/static/img/bot-logo.png"
              alt="Bot Avatar"
              className="w-8 h-8 mr-2 rounded-full object-contain"
            />
            <span
              className="text-white px-2 py-1 rounded bg-gray-400"
              style={{ whiteSpace: "pre-wrap" }}
            >
              To get you started, type "/help" to view the full list of commands
              or you can choose from the commands below.
            </span>
          </div>
        </div>
        <div>
          {commands.map((command, commandIndex) => (
            <div key={commandIndex} className="flex items-center">
              <div className="ml-8 mr-4 mb-1 text-left flex ">
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
                  chatMessage.sender === "user" ? "bg-blue-600" : "bg-gray-400"
                }`}
              >
                {chatMessage.text}
              </span>
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-2 w-full flex">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          className="w-full p-4 border rounded-lg -mr-5"
        />
        <button className="ml-2 p-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-md float-right">
          Submit
        </button>
      </form>
    </div>
  );
};

export default KellyBot;
