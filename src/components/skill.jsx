import React from 'react';
import { FaReact, FaJs, FaNodeJs, FaLaravel, FaPython, FaHtml5, FaCss3Alt, } from "react-icons/fa";
import { SiTailwindcss, SiLivewire, SiAlpinedotjs } from "react-icons/si";

const skillData = [
  { name: "React", icon: <FaReact size={40} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-500" /> },
  { name: "Node Js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: "Laravel", icon: <FaLaravel size={40} className="text-red-500" /> },
  { name: "Python", icon: <FaPython size={40} className="text-blue-400" /> },
  { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-teal-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-400" /> },
  // { name: "JQuery", icon: <FaJquery size={40} className="text-blue-600" /> },
  { name: "Livewire", icon: <SiLivewire size={40} className="text-purple-500" /> },
  { name: "Alpine Js", icon: <SiAlpinedotjs size={40} className="text-gray-500" /> },
];

const Skill = () => {
  return (
    <div id="portofolio" className="bg-gray-50 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Skills</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {skillData.map((skill, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md transition-transform transform hover:scale-105">
              <div>{skill.icon}</div>
              <p className="mt-3 text-gray-700 font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
