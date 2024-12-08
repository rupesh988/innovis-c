import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../NavbarLogin";

const Dashboard = () => {
  const [papers, setPapers] = useState([]);
  const [projects, setProjects] = useState([]);
  const userEmail = localStorage.getItem("user"); // Retrieve user email

  // Fetch papers and projects on component mount
  useEffect(() => {
    if (userEmail) {
      const fetchData = async () => {
        try {
          // Fetch user papers
          const papersResponse = await axios.get(`http://localhost:8080/getpapers/${userEmail}`);
          setPapers(papersResponse.data || []);

          // Fetch user projects
          const projectsResponse = await axios.get(`http://localhost:8080/getprojects/${userEmail}`);
          setProjects(projectsResponse.data || []);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [userEmail]);

  return (
    <div className="min-h-screen bg-green-50 p-4">
      <Nav login={true} />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-white font-mono text-3xl mb-6">
          Your Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Display Papers */}
          <div className="col-span-full">
            <h2 className="text-xl text-black font-bold mb-4">Your Papers</h2>
            {papers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {papers.map((paper, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/20 backdrop-blur-md shadow-xl rounded-lg border border-white/30 hover:shadow-blue-200 "
                  >
                    <h3 className="text-lg font-bold text-green-900">
                      {paper.title}
                    </h3>
                    <p className="text-sm text-gray-700 mt-2">{paper.abstract}</p>
                    <p className="mt-4 text-sm text-gray-500">
                      Uploaded by: {paper.author || "You"}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-100">No papers found.</p>
            )}
          </div>

          {/* Display Projects */}
          <div className="col-span-full">
            <h2 className="text-xl text-black font-bold mb-4">Your Projects</h2>
            {projects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/20 backdrop-blur-md shadow-xl rounded-lg border hover:shadow-red-300 border-white/30"
                  >
                    <h3 className="text-lg font-bold text-green-900">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-700 mt-2">
                      {project.description}
                    </p>
                    <div className="mt-4 text-sm text-gray-500">
                      <p>Team Size: {project.teamSize}</p>
                      <p>Growth: {project.growth || "N/A"}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-100">No projects found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
