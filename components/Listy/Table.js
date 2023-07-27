import moment from 'moment';
import { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import FileUpload from '../FileUpload';
import AddMember from './AddMember';


const Table = () => {
  const [data, setData] = useState([
    {id: 1, name: "Kaya Johnston", status: "Alumni", course: "BS Information Technology", year_graduated: "2010"},
    {id: 2, name: "Brenda Stephens", status: "Student", course: "BS Political Science", year_graduated: ""},
    {id: 3, name: "Cohen Hunter", status: "Alumni", course: "BA Economics", year_graduated: "2015"},
    {id: 4, name: "Tara Conley", status: "Alumni", course: "BA Economics",  year_graduated: "2009"},
    {id: 5, name: "Skyler Travis", status: "Alumni", course: "BA Economics",  year_graduated: "2021"},
    {id: 6, name: "Tyrese Bender", status: "Alumni", course: "BA Pschology",  year_graduated: "2012"},
    {id: 7, name: "Jaydon Robertson", status: "Alumni", course: "BS Information Science",  year_graduated: "2014"},
    {id: 8, name: "Kira Velasquez", status: "Alumni", course: "BS Computer Science",  year_graduated: "2019"},
    {id: 9, name: "Kenyon Gilmore", status: "Alumni", course: "BS Computer Engineering",  year_graduated: "2020"},
    {id: 10, name: "Antony Nguyen", status: "Alumni", course: "BS Mechanical Engineering",  year_graduated: "2011"},
  ]);

  const [filteredData, setFilteredData] = useState([])
  const [searchKey, setSearchkey] = useState(null)
  const [editingId, setEditingId] = useState(null);
  const [newName, setNewName] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const [newYearGraduated, setNewYearGraduated] = useState('');
  const [newCourse, setNewCourse] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);

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
            year_graduated: newYearGraduated
          };
        }
        return item;
      })
    );
    setEditingId(null);
    setNewName('');
    setNewStatus('');
    setNewCourse('');
    setNewYearGraduated('');
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
          item.status.toLowerCase().startsWith(searchKey) ||
          item.course.toLowerCase().startsWith(searchKey) ||
          item.year_graduated.toLowerCase().startsWith(searchKey)
      );
      setFilteredData(filteredData);
    } else {
      setFilteredData(data)
    }
    
  }, [searchKey, data]);

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
        filename={`Alumni Data ${moment().format('YYYY-MM-DD')}.xlsx`}
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
                  value={newStatus} onChange={(e) => setNewStatus(e.target.value)}
                  /> 
                : 
                  item.status
                }
              </td>
              <td className="border px-4 py-2">{
                item.id === editingId ? 
                  <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={newCourse} onChange={(e) => setNewCourse(e.target.value)}
                  /> 
                : 
                  item.course
                }
              </td>
              <td className="border px-4 py-2">{
                item.id === editingId ? 
                  <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={newYearGraduated} onChange={(e) => setNewYearGraduated(e.target.value)}
                  /> 
                : 
                  item.year_graduated
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
