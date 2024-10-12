import React from 'react';
import { FaRocket, FaTasks, FaFileAlt, FaUsers, FaLightbulb, FaChartLine, FaDatabase, FaCommentDots } from 'react-icons/fa';
import Navbar from './NavbarLogin';

const ActionCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-72 m-4">
      <div className="bg-gray-200 p-4 rounded-t-lg w-full flex justify-center">
        {icon}
      </div>
      <div className="p-6 flex flex-col items-start">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default function ExplorePage() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl text-green-400 font-bold text-center mb-8">Explore Research Activities</h1>
        <div className="flex flex-wrap justify-center">
          <ActionCard
            title="Start Research"
            description="Initiate a new research project."
            icon={<FaRocket className="text-4xl text-blue-500" />}
          />
          <ActionCard
            title="Create Workflow"
            description="Design and manage your research workflow."
            icon={<FaTasks className="text-4xl text-green-500" />}
          />
          <ActionCard
            title="Publish Papers"
            description="Submit and publish your research papers."
            icon={<FaFileAlt className="text-4xl text-yellow-500" />}
          />
          <ActionCard
            title="Collaborate with Peers"
            description="Connect with researchers and share ideas."
            icon={<FaUsers className="text-4xl text-purple-500" />}
          />
          <ActionCard
            title="Innovate Ideas"
            description="Explore innovative ideas and concepts."
            icon={<FaLightbulb className="text-4xl text-orange-500" />}
          />
          <ActionCard
            title="View Analytics"
            description="Analyze research data and insights."
            icon={<FaChartLine className="text-4xl text-teal-500" />}
          />
          <ActionCard
            title="Manage Data"
            description="Organize and manage your research data."
            icon={<FaDatabase className="text-4xl text-red-500" />}
          />
          <ActionCard
            title="Discuss Findings"
            description="Engage in discussions about research outcomes."
            icon={<FaCommentDots className="text-4xl text-indigo-500" />}
          />
        </div>
      </div>
    </div>
  );
}
