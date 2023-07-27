import { useState } from 'react';


export default function About() {

    const [about, setAbout] = useState('I am an ambitious and dedicated BSIT (Bachelor of Science in Information Technology) student with a passion for technology and a drive to excel in the field of IT. With a solid foundation in computer science principles and hands-on experience in various technologies, I am eager to apply my skills and contribute to the ever-evolving world of information technology.')
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
        <div className="bg-gray-900 p-8 ml-40 rounded-lg text-white">
            {/* Left column content */}
            <h1 className="text-2xl font-bold mb-4">About</h1>
            {isEditing ? (
                <textarea 
                    rows="4"
                    className="2xl:w-[55vw] md:w-[45vw] p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="About me"
                    onChange={handleChange}
                    value={about}
                />
            ) : (
                <p>
                {about}
                </p>
            )}
            {isEditing ? (
            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSave}
            >
                Save
            </button>
            ) : (
            <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleEdit}
            >
                Edit
            </button>
            )}
        </div>
    )
}