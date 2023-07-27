import React, { useState,useEffect } from 'react';
import * as XLSX from 'xlsx';

export default function FileUpload({ modalOpen, setModalOpen, saveData, members }) {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState('');

  const closeModal = () => {
    setIsOpen(false);
    setModalOpen(false);
    setFile('');
    setData('');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    const reader = new FileReader();

    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      setData(jsonData);
    };

    reader.readAsBinaryString(file);
  };

  const handleRemoveFile = () => {
      setFile('')
      setData('')
  }

  const handleUpload = () => {
    let new_members = [...members]
    let last_id = members.length

    data.forEach((row, index) => {
        if (index <= 0) {
            return
        }

        const memberExist = members.filter(member => member.name.indexOf(row[1]) > -1);
        
        last_id = !memberExist[0] ? last_id + 1 : last_id

        new_members[memberExist[0] ? memberExist[0].id - 1 : last_id - 1] = {
            id: memberExist[0] ? memberExist[0].id : last_id,
            name: row[1],
            status: row[2],
            course: row[3],
            year_graduated: row[4]
        }

    });
    
    saveData(new_members)
    closeModal()
  };

  useEffect(() => {
    setIsOpen(modalOpen)
  }, [modalOpen])

  return (
    isOpen &&
    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className={`relative bg-white left-[100px] rounded-lg ${file ? 'w-1/2' : 'top-[-280px] w-96'}`}>
        <div className="flex items-center justify-between p-4 bg-gray-800 text-white rounded-t-lg">
            <h2 className="text-lg font-semibold">Add Members</h2>
            <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
                />
            </svg>
            </button>
        </div>
        <div className="p-4">
            { !data.length > 0 && (
            <input
                type="file" 
                accept=".xlsx" 
                onChange={handleFileChange} 
            /> 
            )}
            
            { data.length > 0 && (
            <>
            <h4 className="text-center text-xl mb-10 font-bold">
                Uploading file: <span className="text-orange-400">{file.name}</span>
                <button
                    onClick={handleRemoveFile} 
                    className="text-red-400 hover:text-red-600 ml-2 text-md"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 12" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
            </h4>
            <table className="table-auto bg-white w-full mb-10">
            <thead>
                <tr>
                {data[0] &&
                    data[0].map((header, index) => (
                    index === 0 ? '' : <th className="border px-4 py-2" key={index}>{header}</th>
                    ))
                }
                </tr>
            </thead>
            <tbody>
                {data.slice(1).map((row, index) => (
                <tr key={index}>
                    {row.map((cell, index) => (
                    index === 0 ? 
                    '' 
                    :
                    <td 
                    className="border px-4 py-2 text-center"    
                    key={index}
                    >
                        {cell}
                    </td>
                    ))}
                </tr>
                ))}
            </tbody>
            </table>

            <button
                onClick={handleUpload}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-md ml-2"
            >
                Upload
            </button>

            <button
                onClick={closeModal}
                className="bg-gray-400 hover:bg-gray-600 text-white px-4 py-1.5 rounded-md ml-2"
            >
                Cancel
            </button>
            </>
            )}
        </div>
        </div>
    </div>
  );
};
