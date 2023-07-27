import { useState, useEffect } from 'react';
import { FaPlus, FaPenFancy } from 'react-icons/fa';


const JobExperience = ({ title, company, duration, description }) => {
    return (
      <div className="rounded-lg shadow p-4 mb-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <h4 className="text-lg text-gray-300 mb-2">{company}</h4>
        <p className="text-gray-400 mb-2">{duration}</p>
        <ul className="list-disc ml-6">
          {description.map((item, index) => (
            <li key={index} className="text-gray-300 mb-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
};

export default function Experience() {

    const [experience, setExperience] = useState()

    useEffect(() => {
        setExperience([{
            title: 'Full Stack Developer',
            company: 'Company X',
            duration: 'Jan 2020 - Jan 2021',
            description: [
                'Developed and maintained web applications using modern frontend and backend technologies, including HTML, CSS, JavaScript, React, Node.js, and Express.js.',
                'Collaborated with the design and product teams to understand project requirements and translate them into technical specifications.'
            ]
        },
        {
            title: 'Full Stack Developer',
            company: 'Company Z',
            duration: 'Jan 2019 - Jan 2020',
            description: [
                'Designed and optimized database schemas, wrote complex SQL queries, and implemented database interactions using technologies such as MySQL and MongoDB.',
                'Integrated third-party APIs and services to enhance application functionality and improve user experience.',
                'Implemented secure authentication and authorization mechanisms, including token-based authentication and OAuth.'
            ]
        }])
    }, [])
    

    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };
    const handleSave = () => {
        setIsEditing(false);
    };
    const handleChange = (event) => {
        setAbout(event.target.value);
    };

    return (
        experience && 
        <div className="bg-gray-900 p-8 ml-40 mt-2 rounded-lg text-white">
            {/* Left column content */}
            <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold mb-4">Experiences</h1>
            <span className="">
                <button className="text-2xl mr-2">
                    <FaPlus />
                </button>
                <button className="text-2xl">
                    <FaPenFancy />
                </button>
            </span>
            </div>
            {experience.map((job, index) => (
                <JobExperience key={index} {...job} />
            ))}

        </div>
    )
}