import React, { useState,useEffect } from 'react';
import * as XLSX from 'xlsx';

export default function AddMember({ modalOpen, setModalOpen, saveData, members }) {
  const [newName, setNewName] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const [newCourse, setNewCourse] = useState('');
  const [newYearGraduated, setNewYearGraduated] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setModalOpen(false);
  };

  const handleSubmit = () => {
      const data = {
          id: members.length + 1,
          name: newName,
          status: newStatus,
          course: newCourse,
          year_graduated: newYearGraduated
      };

      saveData([...members, data])
      setNewName('')
      setNewStatus('')
      setNewCourse('')
      setNewYearGraduated('')
      setIsOpen(false);
      setModalOpen(false);
  }

  useEffect(() => {
    setIsOpen(modalOpen)
  }, [modalOpen])

  return (
    isOpen &&
    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className={`relative bg-white top-[-80px] left-[100px] rounded-lg w-96`}>
        <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <h2 className="text-lg font-semibold">New Member</h2>
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
            <div className="bg-white p-8">
            <div className="mb-4">
                <label htmlFor="name" className="block font-medium text-gray-700">
                Name
                </label>
                <input
                type="text"
                id="name"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="status" className="block font-medium text-gray-700">
                Status
                </label>
                <input
                type="text"
                id="status"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="course" className="block font-medium text-gray-700">
                Course
                </label>
                <input
                type="text"
                id="course"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                value={newCourse}
                onChange={(e) => setNewCourse(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="year_graduated" className="block font-medium text-gray-700">
                Year Graduated
                </label>
                <input
                type="text"
                id="year_graduated"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                value={newYearGraduated}
                onChange={(e) => setNewYearGraduated(e.target.value)}
                />
            </div>
            <button
                onClick={handleSubmit}
                className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded focus:outline-none focus:bg-blue-600"
            >
                Save
            </button>
        </div>
        </div>
        </div>
    </div>
  );
};
