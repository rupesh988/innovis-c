import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <a href="/alogin"> <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-500">
            Logout
          </button> </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card: Project Management */}
          <Card
            title="Project Management"
            description="Create, update, and manage all research projects."
            buttonText="Manage Projects"
          />

          {/* Card: Collaboration Management */}
          <Card
            title="Collaboration Management"
            description="Oversee and approve collaboration requests."
            buttonText="Manage Collaborations"
          />

          {/* Card: User Management */}
          <Card
            title="User Management"
            description="View and assign roles to registered users."
            buttonText="Manage Users"
          />

          {/* Card: Reports & Analytics */}
          <Card
            title="Reports & Analytics"
            description="Generate insights on project and collaboration progress."
            buttonText="View Reports"
          />

          {/* Card: Notifications */}
          <Card
            title="Notifications"
            description="Configure notifications and manage alerts."
            buttonText="Manage Notifications"
          />

          {/* Card: Resource Management */}
          <Card
            title="Resource Management"
            description="Organize and maintain shared research resources."
            buttonText="Manage Resources"
          />

          {/* Card: System Settings */}
          <Card
            title="System Settings"
            description="Update platform settings and manage permissions."
            buttonText="System Settings"
          />
        </div>
      </main>
    </div>
  );
};

// Reusable Card Component
const Card = ({ title, description, buttonText }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
      <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500">
        {buttonText}
      </button>
    </div>
  );
};

export default AdminDashboard;
