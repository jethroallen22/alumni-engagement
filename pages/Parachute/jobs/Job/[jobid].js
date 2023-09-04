import React from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Parachute/Navbar";
import Footer from "@/components/Parachute/Footer";

const JobDetail = () => {
  const router = useRouter();
  const { jobid } = router.query;
  const selectedJob = router.query.jobData
    ? JSON.parse(router.query.jobData)
    : null;

  console.log("id:", selectedJob);

  return (
    <div className="">
      {selectedJob ? (
        <>
          <Navbar />
          <div className="bg-gray-100 min-h-screen flex justify-center">
            <div className="bg-white text-gray-800 rounded-lg shadow-md m-4 w-10/12">
              <div>
                <img
                  className="w-full h-80 object-cover rounded-lg"
                  src={selectedJob.image}
                  alt={selectedJob.title}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold mb-4">
                    {selectedJob.title}
                  </h1>
                  <div>
                    <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold mt-2 px-4 py-2 border border-gray-500 hover:border-transparent rounded">
                      <span>Apply Now</span>
                    </button>
                    <button className="bg-transparent hover:bg-gray-500 text-gray-800 font-bold mt-2 px-4 py-2 border border-gray-500 hover:border-transparent rounded ml-2">
                      <span>Save</span>
                    </button>
                  </div>
                </div>

                <p className="text-gray-800 mb-2">{selectedJob.company}</p>
                <p className="text-gray-800 mb-2">{selectedJob.location}</p>
                <p className="text-gray-800 mb-2">{selectedJob.job_type}</p>
                <p className="text-gray-800 mb-2">{selectedJob.experience}</p>
                <p className="text-gray-800 mb-4">{selectedJob.description}</p>
                <h1 className="text-xl font-medium mb-4">Qualifications</h1>
                <ul className="list-disc">
                  {selectedJob.qualifications.map((qualification) => (
                    <li className="text-gray-800 mb-2 ml-5">{qualification}</li>
                  ))}
                </ul>
                <h1 className="text-xl font-medium mb-4">Requirements</h1>
                <ul className="list-disc">
                  {selectedJob.requirements.map((requirement) => (
                    <li className="text-gray-800 mb-2 ml-5">{requirement}</li>
                  ))}
                </ul>
                <h1 className="text-xl font-medium mb-4">Skills</h1>
                <ul className="list-disc">
                  {selectedJob.skills.map((skill) => (
                    <li className="text-gray-800 mb-2 ml-5">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <p>No job details found.</p>
      )}
    </div>
  );
};

export default JobDetail;
