import React from "react";
import { useRouter } from "next/router";

const jobs = [
  {
    id: 1,
    company: "ABC Tech",
    image:
      "https://aquilacommercial.com/wp-content/uploads/2019/08/Davenport-360-1-2000x849.jpg",
    background:
      "ABC Tech is a leading technology company specializing in innovative software solutions and cutting-edge technologies. With a team of passionate engineers and developers, we strive to transform industries and make a positive impact on the world through our state-of-the-art products.",
    title: "Software Engineer",
    description:
      "We are seeking a talented and creative Software Engineer to join our dynamic team. As a Software Engineer at ABC Tech, you will be responsible for designing, developing, and implementing software solutions that meet the needs of our clients. You will work on exciting and challenging projects, collaborating with cross-functional teams to deliver high-quality software products.",
    qualifications: [
      "Bachelor's degree in Computer Science, Software Engineering, or related field.",
      "Proven experience in software development and programming languages such as Python, Java, or C++.",
      "Strong problem-solving skills and attention to detail.",
      "Ability to work collaboratively and communicate effectively with team members and clients.",
    ],
    requirements: [
      "Develop and implement software applications based on client requirements.",
      "Conduct testing and debugging of software products.",
      "Collaborate with product managers, designers, and other stakeholders to deliver high-quality software.",
      "Stay up-to-date with the latest industry trends and technologies.",
      "Participate in code reviews and provide constructive feedback to peers.",
    ],
    job_type: "Full-time",
    location: "Manila, Philippines",
    experience: "2+ years",
    skills: ["Python", "JavaScript", "SQL", "Agile"],
  },
  {
    id: 2,
    company: "XYZ Solutions",
    image:
      "https://media.newyorker.com/photos/59095138ebe912338a372758/master/w_2560%2Cc_limit/amazon-spheres-580%2520(1).jpg",
    background:
      "XYZ Solutions is a leading provider of data-driven solutions for businesses worldwide. Our mission is to empower organizations with actionable insights and data intelligence to make informed decisions and drive growth. With a diverse and talented team, we are committed to delivering exceptional value to our clients and making a difference in the world of data analytics.",
    title: "Data Analyst",
    description:
      "We are looking for a skilled and detail-oriented Data Analyst to join our analytics team. As a Data Analyst at XYZ Solutions, you will play a crucial role in collecting, analyzing, and interpreting data to provide valuable insights to our clients. You will work with large datasets, use advanced analytical tools, and collaborate with stakeholders to deliver data-driven solutions.",
    qualifications: [
      "Bachelor's degree in Statistics, Mathematics, Computer Science, or related field.",
      "Proven experience in data analysis, data visualization, and statistical methods.",
      "Proficiency in SQL and data querying languages.",
      "Strong analytical and problem-solving skills.",
      "Advanced knowledge of Excel and data manipulation.",
    ],
    requirements: [
      "Collect, clean, and validate data from various sources.",
      "Perform exploratory data analysis to identify trends and patterns.",
      "Create visually appealing data visualizations and reports.",
      "Collaborate with business stakeholders to understand data requirements.",
      "Provide actionable insights and recommendations based on data analysis.",
    ],
    job_type: "Contract",
    location: "Cebu City, Philippines",
    experience: "1+ years",
    skills: ["Data Analysis", "SQL", "Excel", "Data Visualization"],
  },
  {
    id: 3,
    company: "123 Marketing",
    image:
      "https://bos.digital/wp-content/uploads/2021/01/AdobeStock_300144034-min-750x465.jpg",
    background:
      "123 Marketing is a dynamic marketing agency that specializes in helping businesses thrive in the digital landscape. Our team of creative and strategic marketers is committed to delivering top-notch marketing solutions tailored to the unique needs of our clients. We pride ourselves on our innovative approach, data-driven strategies, and dedication to driving results for our partners.",
    title: "Digital Marketing Specialist",
    description:
      "We are hiring a passionate and results-driven Digital Marketing Specialist to join our growing team. As a Digital Marketing Specialist at 123 Marketing, you will be responsible for planning, executing, and optimizing digital marketing campaigns across various platforms. You will leverage your expertise in SEO, social media marketing, and data analytics to drive targeted traffic and achieve measurable business objectives.",
    qualifications: [
      "Bachelor's degree in Marketing, Business, or related field.",
      "Proven experience in digital marketing, including SEO, SEM, and social media campaigns.",
      "In-depth knowledge of Google Analytics and other marketing analytics tools.",
      "Excellent communication and copywriting skills.",
      "Creative mindset and ability to think outside the box.",
    ],
    requirements: [
      "Develop and implement digital marketing strategies to achieve business goals.",
      "Conduct keyword research and optimize website content for SEO.",
      "Manage social media accounts and engage with the online community.",
      "Analyze campaign performance and make data-driven recommendations.",
      "Collaborate with the content team to create compelling marketing materials.",
    ],
    job_type: "Remote",
    location: "Remote within the Philippines",
    experience: "3+ years",
    skills: [
      "SEO",
      "Social Media Marketing",
      "Google Analytics",
      "Content Creation",
    ],
  },
  {
    id: 4,
    company: "Creative Studios Inc.",
    image:
      "https://www.dice.com/binaries/large/content/gallery/dice/insights/2020/10/shutterstock_1042807015.jpg",
    background:
      "Creative Studios Inc. is a renowned design agency with a rich history of more than three decades in the creative industry. Founded in 1990 by visionary artists, the company has grown to become a leading force in the design world. Our legacy of innovation, craftsmanship, and client satisfaction has earned us numerous prestigious awards and recognition in the design community.\n\nAt Creative Studios Inc., we believe that exceptional design has the power to inspire, engage, and transform. Our team of passionate graphic designers, illustrators, and artists are driven by a shared passion for creativity and a commitment to pushing the boundaries of visual storytelling. We pride ourselves on our ability to create timeless designs that resonate with audiences across various cultures and industries.\n\nOver the years, we have collaborated with a diverse range of clients, from small startups to multinational corporations, providing tailor-made design solutions that help them stand out in a competitive market. Our work spans across branding, print design, digital media, packaging, and more. As we continue to grow, we remain dedicated to fostering an environment of creativity, collaboration, and continuous learning for our team members.",
    title: "Graphic Designer",
    description:
      "We are seeking a highly skilled and imaginative Graphic Designer to join our dynamic team at Creative Studios Inc. As a Graphic Designer, you will play a pivotal role in conceptualizing and executing stunning visual designs that captivate audiences and elevate brands.\n\nYour primary responsibility will be to collaborate with clients and internal stakeholders to understand project requirements and translate them into visually compelling concepts. Using your expertise in Adobe Creative Suite, you will craft eye-catching designs for a wide range of applications, including brand identities, marketing collateral, packaging, digital assets, and more.\n\nIn this role, you will have the opportunity to work on exciting projects from diverse industries, presenting you with new challenges and opportunities for personal growth. You will be part of a collaborative and supportive team that values creativity, excellence, and attention to detail.\n\nThe ideal candidate is a passionate and innovative designer with a strong understanding of design principles, composition, and typography. You must be adept at multitasking, working on multiple projects simultaneously, and meeting tight deadlines. Your ability to think outside the box and push the boundaries of visual storytelling will be critical to your success as a Graphic Designer at Creative Studios Inc.\n\nJoin us in our journey of crafting exceptional designs that leave a lasting impact on audiences around the world.",
    qualifications: [
      "Bachelor's degree in Graphic Design, Fine Arts, or related field.",
      "Proven experience in graphic design, preferably in an agency or creative environment.",
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign).",
      "Strong understanding of design principles and composition.",
      "Excellent communication and presentation skills.",
    ],
    requirements: [
      "Collaborate with clients and the design team to understand project requirements.",
      "Create visual concepts and mockups for branding, marketing materials, and digital assets.",
      "Ensure consistency and adherence to brand guidelines across all design deliverables.",
      "Iterate on designs based on feedback and meet project deadlines.",
      "Stay updated with design trends and industry best practices.",
    ],
    job_type: "Full-time",
    location: "Makati City, Philippines",
    experience: "2+ years",
    skills: [
      "Adobe Creative Suite",
      "Graphic Design",
      "Branding",
      "Communication",
    ],
  },
  {
    id: 5,
    company: "E-Commerce Co.",
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/03/Image_-_Customer_service_rep_.jpeg.jpg",
    background:
      "E-Commerce Co. is a dynamic and rapidly growing e-commerce platform that was founded in 2015 with the vision of creating a seamless and enjoyable shopping experience for customers in the Philippines. Our platform offers an extensive selection of products across various categories, ranging from electronics and fashion to home essentials and beauty products.\n\nIn just a few years, we have achieved remarkable success in the competitive e-commerce landscape, gaining a loyal customer base and establishing strong partnerships with trusted brands and suppliers. Our commitment to providing top-notch customer service and high-quality products has earned us a reputation as a reliable and customer-centric online shopping destination.\n\nAt E-Commerce Co., we are driven by innovation and creativity. Our tech-savvy team continuously explores new ways to enhance our platform and optimize the user experience. We invest in cutting-edge technology and data-driven solutions to stay ahead of the curve and anticipate the evolving needs of our customers.\n\nOur company culture emphasizes collaboration, empowerment, and a customer-first mindset. We believe that our success is a direct result of the dedication and passion of our talented employees, who work together to build a positive and inclusive work environment.\n\nAs we continue to grow and expand our operations, we are seeking passionate individuals to join our customer support team and play a crucial role in delighting our customers at every touchpoint.",
    title: "Customer Support Specialist",
    description:
      "We are looking for a friendly, empathetic, and dedicated Customer Support Specialist to join our customer support team at E-Commerce Co. As a Customer Support Specialist, you will be the front line of communication between our company and our valued customers, ensuring their inquiries are promptly addressed, and their shopping experience is exceptional.\n\nIn this role, you will be responsible for responding to customer inquiries via various communication channels, such as phone calls, emails, and chat. Your primary focus will be to assist customers with their orders, resolve product-related issues, and provide product recommendations and solutions. You will also manage and track customer interactions using our CRM system, ensuring that no customer query goes unanswered.\n\nAt E-Commerce Co., we prioritize delivering a personalized and memorable customer experience. As a Customer Support Specialist, you will have the opportunity to create meaningful connections with customers and build brand loyalty through outstanding service and problem-solving.\n\nThe ideal candidate is a patient and empathetic individual with excellent communication skills. You must be able to adapt to a fast-paced environment and handle a high volume of customer inquiries while maintaining a positive and composed attitude. Your dedication to delivering top-notch customer service and your ability to work collaboratively in a team environment will be key to excelling in this role.\n\nJoin our customer support team and be part of an organization that values customer satisfaction and places our customers at the heart of everything we do.",
    qualifications: [
      "Bachelor's degree in Business, Communication, or related field.",
      "Proven experience in customer support or a related role.",
      "Strong interpersonal and communication skills.",
      "Ability to handle customer inquiries and resolve issues effectively.",
      "Familiarity with CRM systems and ticketing platforms is a plus.",
    ],
    requirements: [
      "Respond to customer inquiries and provide timely and accurate resolutions.",
      "Maintain a positive and empathetic attitude towards customers.",
      "Collaborate with internal teams to escalate and resolve complex issues.",
      "Keep accurate records of customer interactions and transactions.",
      "Assist in developing customer support training materials.",
    ],
    job_type: "Contract",
    location: "Manila, Philippines",
    experience: "1+ years",
    skills: ["Customer Support", "Communication", "Problem-solving", "CRM"],
  },
];

const Jobs = () => {
  const router = useRouter();
  const handleViewJobButtonClick = (jobId) => {
    const selectedJob = jobs.find((job) => job.id === jobId);
    router.push({
      pathname: `/Parachute/jobs/Job/${jobId}`,
      query: { jobData: JSON.stringify(selectedJob) },
    });
  };

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
            <p
              className="text-gray-200"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {job.description}
            </p>

            <button
              className="bg-transparent hover:bg-gray-500 text-white font-bold mt-2 px-4 py-2 border border-gray-500 hover:border-transparent rounded flex items-center"
              onClick={() => {
                console.log("Click " + job.id);
                handleViewJobButtonClick(job.id);
              }}
            >
              <span>View job</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
