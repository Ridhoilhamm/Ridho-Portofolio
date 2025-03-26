import React from "react";

const Profile = () => {
  const skills = [
    { name: "Programming", level: 95 },
    { name: "Data Analyst", level: 75 },
    { name: "Sistem Analyst", level: 60 },
    { name: "Web Design", level: 80 },
  ];

  return (
    <div id="profile" className="section font-ubuntu bg-white">
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="bg-white rounded-xl p-6 flex flex-col md:flex-row w-full max-w-7xl shadow-lg">
          {/* Avatar */}
          <div className="w-full md:w-1/3 flex justify-center items-center p-4">
            <img
              src="/images/profile-ridho.png"
              alt="Avatar"
              className="rounded-xl shadow-md w-64 h-64 md:w-80 md:h-80 object-cover"
            />
          </div>

          <div className="w-full md:w-2/3 px-6 flex flex-col items-center text-center mx-auto">
            <h2 className="text-3xl font-bold text-gray-800">ABOUT ME</h2>
            <p className="text-gray-600 mt-3 text-base leading-relaxed max-w-2xl text-left">
              Someone who is learning about website development and website optimization. Currently I have mastered Node.js, React.js, and Laravel. I am an expert in Java, HTML, CSS, and using Figma. I am a person who always wants to be at the forefront, always curious about technology, always take advantage of existing opportunities, and always strive to be the best.
            </p>

            <div className="mt-6 w-full max-w-lg">
              {skills.map((skill, index) => (
                <div key={index} className="mb-5">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                    <span className="text-orange-600 -600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="bg-gray-300 h-3 rounded-full mt-1">
                    <div
                      className="bg-gradient h-3 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>   
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
