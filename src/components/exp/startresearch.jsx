import React, { useState, useEffect } from "react";
import axios from "axios";

const StartProject = () => {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [teamMembers, setTeamMembers] = useState([{ name: "", role: "" }]);
  const [technologies, setTechnologies] = useState("");
  const userEmail = localStorage.getItem("user"); // Assuming the user email is stored in localStorage

  // Fetch user's projects on component mount
  useEffect(() => {
    if (userEmail) {
      const fetchProjects = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/getprojects/${userEmail}`);
          setProjects(response.data || []);
        } catch (error) {
          console.error("Error fetching projects:", error);
        }
      };
      fetchProjects();
    }
  }, [userEmail]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log form data for debugging
    console.log("Project Name:", projectName);
    console.log("Description:", description);
    console.log("Team Members:", teamMembers);
    console.log("Technologies:", technologies);

    // Send data to the server
    const projectData = {
      "projectName" : projectName,
      "description" :  description,
      "teamMembers" :  teamMembers,
      "technologies": technologies,
      email: userEmail,
    };

    try {
      const response = await axios.post("http://localhost:8080/projects", projectData);
      if (response.data.status === true) {
        alert("Project saved successfully!");
        setProjects([...projects, projectData]); // Update UI
        // Reset form
        setProjectName("");
        setDescription("");
        setTeamMembers([{ name: "", role: "" }]);
        setTechnologies("");
      } else {
        alert("Failed to save project.");
      }
    } catch (error) {
      console.error("Error saving project:", error);
      alert("Error saving project.");
    }
  };

  // Add a new team member field
  const addTeamMember = () => {
    setTeamMembers([...teamMembers, { name: "", role: "" }]);
  };

  // Update team member details
  const updateTeamMember = (index, field, value) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index][field] = value;
    setTeamMembers(updatedMembers);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Start Your Research Project</h1>
      <form
        className="w-3/4 bg-white/50 p-6 rounded-xl shadow-lg backdrop-blur-md bg-green-50"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-green-700 font-semibold mb-2">Project Name</label>
          <input
            type="text"
            className="w-full p-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-green-700 font-semibold mb-2">Description</label>
          <textarea
            className="w-full p-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-green-700 font-semibold mb-2">Team Members</label>
          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-center gap-4 mb-2">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 p-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                value={member.name}
                onChange={(e) => updateTeamMember(index, "name", e.target.value)}
              />
              <input
                type="text"
                placeholder="Role"
                className="w-1/2 p-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                value={member.role}
                onChange={(e) => updateTeamMember(index, "role", e.target.value)}
              />
            </div>
          ))}
          <button
            type="button"
            className="text-green-600 font-semibold hover:underline"
            onClick={addTeamMember}
          >
            + Add Team Member
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-green-700 font-semibold mb-2">Technologies</label>
          <input
            type="text"
            className="w-full p-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
        >
          Save Project
        </button>
      </form>
      <div className="w-3/4 mt-8">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Your Projects</h2>
        {projects.length > 0 ? (
          <div className="grid gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/70 p-4 rounded-lg shadow backdrop-blur-md"
              >
                <h3 className="text-xl font-bold text-green-800">{project.projectName}</h3>
                <p className="text-green-600">{project.description}</p>
                <ul className="text-green-700 mt-2">
                  <li>
                    <strong>Technologies:</strong> {project.technologies}
                  </li>
                  <li>
                    <strong>Team Members:</strong>
                    <ul className="ml-4">
                      {project.teamMembers.map((member, idx) => (
                        <li key={idx}>
                          {member.name} - {member.role}
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-green-600">No projects available.</p>
        )}
      </div>
    </div>
  );
};

export default StartProject;
