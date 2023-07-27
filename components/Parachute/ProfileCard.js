import React from 'react';

const ProfileCard = ({ name, jobTitle, location, email, imageSrc }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <img
            className="w-20 h-20 rounded-full"
            src={imageSrc}
            alt="Profile"
        />
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700 mb-4">{jobTitle}</p>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-current text-gray-500 mr-2"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v8h-2zm0 10h2v2h-2z" />
          </svg>
          <p className="text-gray-600">{location}</p>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-current text-gray-500 mr-2"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 3.58 8 8 8s8-3.59 8-8c0-5.52-4.48-10-10-10zm0 14c-2.21 0-4-1.79-4-4 0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.21-1.79 4-4 4zm1-9h-2v2h2zm0 4h-2v6h2z" />
          </svg>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
