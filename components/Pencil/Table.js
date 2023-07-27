import moment from 'moment';
import { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import FileUpload from '../FileUpload';
import AddEvent from './AddEvent';


const Table = () => {
  const [data, setData] = useState([
    {id: 1, name: "Event 1", description: "Event 1 2023", date: "July 1, 2023", location: "Manila"},
    {id: 2, name: "Event 2", description: "Event 2 2023", date: "July 2, 2023", location: "Manila"},
    {id: 3, name: "Event 3", description: "Event 3 2023", date: "July 3, 2023", location: "Manila"},
    {id: 4, name: "Event 4", description: "Event 4 2023", date: "July 4, 2023", location: "Manila"},
    {id: 5, name: "Event 5", description: "Event 5 2023", date: "July 5, 2023", location: "Manila"},
    {id: 6, name: "Event 6", description: "Event 6 2023", date: "July 6, 2023", location: "Manila"},
    {id: 7, name: "Event 7", description: "Event 7 2023", date: "July 7, 2023", location: "Manila"},
    {id: 8, name: "Event 8", description: "Event 8 2023", date: "July 8, 2023", location: "Manila"},
    {id: 9, name: "Event 9", description: "Event 9 2023", date: "July 9, 2023", location: "Manila"},
  ]);

  const [filteredData, setFilteredData] = useState([])
  const [searchKey, setSearchkey] = useState(null)
  const [editingId, setEditingId] = useState(null);
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);

  const handleEdit = (id) => {
    const row = data.find((item) => item.id === id);
    setEditingId(id);
    setNewName(row.name);
    setNewDescription(row.description);
    setNewLocation(row.location);
    setNewDate(row.date);
  };

  const handleUpdate = () => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === editingId) {
          return { 
            ...item,
            name: newName,
            description: newDescription,
            location: newLocation,
            date: newDate
          };
        }
        return item;
      })
    );
    setEditingId(null);
    setNewName('');
    setNewDescription('');
    setNewLocation('');
    setNewDate('');
  };

  const handleAdd = () => {
    setShowAddModal(!showAddModal)
  }

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
    setUploadModal(!uploadModal)
  };

  useEffect(() => {
    if(searchKey) {
      const filteredData = data.filter(
        (item) =>
          item.name.toLowerCase().startsWith(searchKey) ||
          item.description.toLowerCase().startsWith(searchKey) ||
          item.location.toLowerCase().startsWith(searchKey) ||
          item.date.toLowerCase().startsWith(searchKey)
      );
      setFilteredData(filteredData);
    } else {
      setFilteredData(data)
    }
    
  }, [searchKey, data]);

  return (
    <>
    <AddEvent
      modalOpen={showAddModal}
      setModalOpen={setShowAddModal}
      saveData={setData}
      events={data}
    />
    <FileUpload 
      modalOpen={uploadModal}
      setModalOpen={setUploadModal}
      saveData={setData}
      events={data}
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
        filename={`Alumni Events ${moment().format('YYYY-MM-DD')}.xlsx`}
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
            <th className="border px-4 py-2">Event</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2 w-[200px]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {!filteredData.length > 0 && searchKey && (
            <tr key={1}>
              <td colSpan={4} className="border px-4 py-2 text-center">No records for {searchKey}</td>
            </tr>
          )}
          {filteredData.length > 0 && filteredData.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{
                item.id === editingId ? 
                  <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={newName} onChange={(e) => setNewName(e.target.value)}
                  /> 
                : 
                  item.name
                }
              </td>
              <td className="border px-4 py-2">{
                item.id === editingId ? 
                  <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={newDescription} onChange={(e) => setNewDescription(e.target.value)}
                  /> 
                : 
                  item.description
                }
              </td>
              <td className="border px-4 py-2">{
                item.id === editingId ? 
                  <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={newLocation} onChange={(e) => setNewLocation(e.target.value)}
                  /> 
                : 
                  item.date
                }
              </td>
              <td className="border px-4 py-2">{
                item.id === editingId ? 
                  <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={newDate} onChange={(e) => setNewDate(e.target.value)}
                  /> 
                : 
                  item.location
                }
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
    </>
  );
};

export default Table;
