import React from 'react';
import { BiTimeFive } from 'react-icons/bi';

// job data 

const Data = [
  {
  id: 1,
  image: "public/bbb.jpg",
  title: "Software Engineer - React.js",
  location: "Douala, Cameroon",
  desc: "Build dynamic web applications.",
  company: "Melvora Tech",
  },
  {
  id: 2,
  image: "public/bbb.jpg",
  title: "Data Scientist - Machine Learning",
  location: "Yaoundé, Cameroon",
  desc: "Leverage data to drive insights.",
  company: "Bitech Solutions",
  },
  {
  id: 3,
  image: "public/bbb.jpg",
  title: "Cybersecurity Analyst",
  location: "Limbe, Cameroon",
  desc: "Protect organizations from cyber threats.",
  company: "Cyber Fortress",
  },
  {
  id: 4,
  image: "public/bbb.jpg",
  title: "Mobile App Developer - Flutter",
  location: "Buea, Cameroon",
  desc: "Create cross-platform mobile apps.",
  company: "Technovation Labs",
  },
  {
  id: 5,
  image: "public/bbb.jpg",
  title: "DevOps Engineer",
  location: "Bamenda, Cameroon",
  desc: "Automate software development and deployment.",
  company: "Digicorp Solutions",
  },
  {
  id: 6,
  image: "public/bbb.jpg",
  title: "UI/UX Designer",
  location: "Garoua, Cameroon",
  desc: "Create user-friendly and visually appealing designs.",
  company: "Creativ Studio",
  },
  {
  id: 7,
  image: "public/bbb.jpg",
  title: "Full-Stack Developer - MERN Stack",
  location: "Maroua, Cameroon",
  desc: "Build end-to-end web applications.",
  company: "Tech Innovators",
  },
  {
  id: 8,
  image: "public/bbb.jpg",
  title: "Network Administrator",
  location: "Bafoussam, Cameroon",
  desc: "Manage and maintain computer networks.",
  company: "Netcom Systems",
  },
  {
  id: 9,
  image: "public/bbb.jpg",
  title: "Quality Assurance Analyst",
  location: "Ngaoundéré, Cameroon",
  desc: "Ensure software quality and reliability.",
  company: "Qualitytech",
  },
  {
  id: 10,
  image: "public/bbb.jpg",
  title: "Product Manager",
  location: "Kribi, Cameroon",
  desc: "Define and execute product strategy.",
  company: "Innova Solutions",
  },
  {
  id: 11,
  image: "public/bbb.jpg",
  title: "Front-End Developer - Vue.js",
  location: "Edéa, Cameroon",
  desc: "Develop engaging user interfaces.",
  company: "Techsavvy",
  },
  {
  id: 12,
  image: "public/bbb.jpg",
  title: "IT Support Technician",
  location: "Ebolowa, Cameroon",
  desc: "Provide technical assistance to users.",
  company: "Techsupport Inc.",
  },
  {
  id: 13,
  image: "public/bbb.jpg",
  title: "Data Analyst",
  location: "Bertoua, Cameroon",
  desc: "Collect, analyze, and interpret data.",
  company: "Datatech Solutions",
  },
  {
  id: 14,
  image: "public/bbb.jpg",
  title: "Blockchain Developer",
  location: "Mokolo, Cameroon",
  desc: "Develop decentralized applications and solutions.",
  company: "Crypto Innovations",
  },
  {
  id: 15,
  image: "public/bbb.jpg",
  title: "Artificial Intelligence Engineer",
  location: "Kousséri, Cameroon",
  desc: "Build intelligent systems and applications.",
  company: "AI Tech Hub",
  },
  ];


const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10 " >
        {Data.map((job) => (
          <div
            key={job.id}
            className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-grayIsh400/700 hover:shadow-lg"
          >
            <span className="flex just-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                {job.title}
              </h1>
              <span className="flex items-center text-[#ccc] gap-1">
                <BiTimeFive /> {job.time}
              </span>
            </span>
            <h6 className="text-[#ccc]">{job.location}</h6>
            <p className="text-[12px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover::text-white">
              {job.desc}
            </p>
            <div className="company flex items-center gap-2">
              <img src={job.image} alt="Company logo" className="w-[10%]" />
              <span className="text-[14px] py-[1rem] block  group-hover:text-white">
                {job.company}
              </span>
            </div>
            <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] semibold text-textColor hover:bg-white group-hover/ item:text-textColor group-hover:text-white">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;