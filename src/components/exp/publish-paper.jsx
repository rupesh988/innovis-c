import React, { useState, useEffect } from "react";
import axios from "axios";  // Import axios
import Nav from "../NavbarLogin";
import Pro from "../images/profile.webp";

const Paper = () => {
  const [papers, setPapers] = useState([]); // Initialize papers as an empty array
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [file, setFile] = useState(null);
  const userEmail = localStorage.getItem("user"); // Retrieve email from local storage

  // Fetch papers on component mount
  useEffect(() => {
    console.log("hello")
    if (userEmail) {
      const fetchPapers = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/getpapers/${userEmail}`);

          setPapers(await response.data || []);
        } catch (error) {
          console.error("Error fetching papers:", error);
        }
      };
      fetchPapers();
    }
  }, [userEmail]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPaper = {
      title,
      abstract,
      email: userEmail,
    };

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("Abstract", abstract);
      formData.append("email", userEmail);
      if (file) {
        formData.append("file", file);
      }

      const response = await axios.post("http://localhost:8080/paper", {"title": title,"abstract": abstract,"email": userEmail});
      
      if (response.data.status === true) {
        
        setTitle("");
        setAbstract("");
        setFile(null);
        setPapers([...papers, newPaper]); // Update the UI with the new paper
      } else {
        console.log("Failed to add paper:", response);
      }
    } catch (error) {
      console.log(error);
      alert("Error saving paper.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <Nav login={true} />
      <div className="bg-green-50 min-h-screen w-full flex scroll-auto flex-row gap-12 p-3">
        {/* Left Sidebar */}
        <div className="items-center min-h-full w-1/3 min-w-96 flex flex-col scroll-auto p-2 rounded">
          {/* Profile Card */}
          <div className="border rounded-xl border-gray-400 m-2 h-24 w-full bg-white/45 shadow-2xl shadow-white flex flex-row gap-4 scroll-auto p-2">
            <img
              src={Pro}
              alt="profile"
              className="w-16 h-16 rounded-full shadow hover:shadow-green-700 shadow-green-400 m-1"
            />
            <div className="m-2 font-mono">
              <b>{userEmail}</b>
              <br />
              <a>Researcher at Atlas technologies.</a>
              <br />
            </div>
          </div>
          {/* Published Papers */}
          <a className="font-mono">Published Papers</a>
          {papers && papers.length > 0 ? (
            papers.map((paper, index) => (
              <div
                key={index}
                className="border border-gray-400 m-2 h-20 w-full bg-white/45 shadow-2xl shadow-white flex flex-col scroll-auto p-2 rounded"
              >
                <p className="font-mono">{paper.title}</p>
                <p className="font-thin">{paper.abstract.slice(0,100)}</p>

              </div>
            ))
          ) : (
            <div className="font-mono text-gray-500">No papers available</div>
          )}
        </div>

        {/* Main Section */}
        <div className="border border-gray-400 min-h-full w-2/3 opacity-45 bg-white shadow-2xl shadow-white flex flex-col scroll-auto p-2 rounded">
          {/* Input Section */}
          <div className="border border-gray-300 p-4 mb-4 rounded bg-white/90">
            <h2 className="font-mono font-bold text-lg">Add New Research Paper</h2>
            <form className="flex flex-col gap-4 mt-2" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Paper Title"
                className="border border-gray-400 rounded p-2 font-mono"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                placeholder="Abstract"
                rows="4"
                className="border border-gray-400 rounded p-2 font-mono"
                value={abstract}
                onChange={(e) => setAbstract(e.target.value)}
              ></textarea>
              <input
                type="file"
                className="border border-gray-400 rounded p-2 font-mono"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-mono py-2 px-4 rounded shadow"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Research Papers */}
          <h2 className="font-mono font-bold text-lg mb-2">Recent Research Papers</h2>
          <div className="flex flex-col gap-4">
            {papers && papers.length > 0 ? (
              papers.map((paper, index) => (
                <div
                  key={index}
                  className="border border-gray-400 p-4 rounded shadow bg-white/90"
                >
                  <h3 className="font-mono font-bold">{paper.title}</h3>
                  <p className="font-mono text-sm">Author: {paper.author}</p>
                </div>
              ))
            ) : (
              <div className="font-mono text-gray-500">No papers available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paper;
