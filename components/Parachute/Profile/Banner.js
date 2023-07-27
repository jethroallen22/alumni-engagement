import { useState } from 'react';

const Banner = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [age, setAge] = useState('19');
    const [location, setLocation] = useState('manila');
    const [email, setEmail] = useState('doe@gmail.com');

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };
    
    const handleSaveClick = () => {
        setIsEditing(false);
    };

    return (
    <div className="bg-gray-900 py-10 mt-2 ml-40 mr-40 rounded-lg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img
              src="/images/profile-image.jpeg"
              alt="Profile"
              className="rounded-full h-32 w-32 mx-auto md:mx-0 md:mr-6"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold text-white mb-2">John Doe</h1>
            <p className="text-xl text-gray-400 mb-4">BS IT Student</p>
            <div className="flex space-x-4">
                <div className="w-full sm:w-1/2 md:w-1/3">
                {isEditing ? (
                    <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={age}
                    onChange={handleAgeChange}
                    />
                ) : (
                    <p className="text-white">Age: {age}</p>
                )}
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3">
                {isEditing ? (
                    <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={location}
                    onChange={handleLocationChange}
                    />
                ) : (
                    <p className="text-white">Location: {location}</p>
                )}
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3">
                {isEditing ? (
                    <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={email}
                    onChange={handleEmailChange}
                    />
                ) : (
                    <p className="text-white">Email: {email}</p>
                )}
                </div>
                {isEditing ? (
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleSaveClick}
                >
                    Save
                </button>
                ) : (
                <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleEditClick}
                >
                    Edit
                </button>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
