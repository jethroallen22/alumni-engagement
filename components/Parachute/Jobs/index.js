import React from 'react';

const jobs = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'ABC Corp',
    location: 'Bulacan',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, lectus sed congue ultrices, nisl orci ullamcorper enim, vel tincidunt eros libero auctor nulla.',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    company: 'XYZ Inc',
    location: 'Pasig Manila',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, lectus sed congue ultrices, nisl orci ullamcorper enim, vel tincidunt eros libero auctor nulla.',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: '23 Inc',
    location: 'Quezon City',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, lectus sed congue ultrices, nisl orci ullamcorper enim, vel tincidunt eros libero auctor nulla.',
  },
  {
    id: 4,
    title: 'Video editor',
    company: 'DEF Inc',
    location: 'Manila',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, lectus sed congue ultrices, nisl orci ullamcorper enim, vel tincidunt eros libero auctor nulla.',
  },
  {
    id: 5,
    title: 'Senior Designer',
    company: 'A46 Inc',
    location: 'Cebu',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, lectus sed congue ultrices, nisl orci ullamcorper enim, vel tincidunt eros libero auctor nulla.',
  },
];

const Jobs = () => {
  return (
    <div className="flex justify-center">
      
      <div className="w-1/2 p-4">
      <h1 className="text-3xl font-bold mb-6 text-white">Job Feed</h1>
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-gray-900 text-white rounded-lg shadow-md p-6 mb-4"
        >
          <h2 className="text-xl font-bold mb-2">{job.title}</h2>
          <h3 className="text-gray-300 text-sm mb-2">{job.company}</h3>
          <p className="text-gray-300 mb-4">{job.location}</p>
          <p className="text-gray-200">{job.description}</p>

          <button className="bg-transparent hover:bg-gray-500 text-white font-bold mt-2 px-4 py-2 border border-gray-500 hover:border-transparent rounded flex items-center">
          <span>View job</span>
        </button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Jobs;
