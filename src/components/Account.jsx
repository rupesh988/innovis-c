import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./NavbarLogin";

const ApplicantDetailsPage = () => {
  const [applicant, setApplicant] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    fname: "",
    lname: "",
    age: "",
    contact: "",
    country: "",
    profession: "",
    organization: "",
    area: "",
    img: null,
  });

  const userEmail = localStorage.getItem("user"); // Retrieve user email

  // Fetch applicant data on component mount
  useEffect(() => {
    if (userEmail) {
      axios
        .get(`http://localhost:8080/getapp/${userEmail}`)
        .then((response) => {
          if (response.data) {
            setApplicant(response.data);
            setFormData(response.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching applicant data:", error);
        });
    }
  }, [userEmail]);

  // Handle input change for form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input for image upload
  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      img: e.target.files[0],
    });
  };

  // Submit the form data (create or update)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const dataToSubmit = {
      email: userEmail,
      fname: formData.fname,
      lname: formData.lname,
      age: formData.age,
      contact: formData.contact,
      country: formData.country,
      profession: formData.profession,
      organization: formData.organization,
      area: formData.area,
      img: formData.img, // You can send img as a base64 string or file, depending on backend handling
    };

    const apiEndpoint = applicant
      ? `http://localhost:8080/getapp/${userEmail}`
      : `http://localhost:8080/application`;

    // Sending data as a JSON object
    axios
      .post(apiEndpoint, dataToSubmit, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response)
        alert("Applicant data saved successfully!");
        setApplicant(response.data);
      })
      .catch((error) => {
        console.error("Error saving applicant data:", error);
      });
  };

  return (
    <div className="min-h-screen bg-green-50 p-4">
      <Nav login={true} />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-black font-mono text-3xl mb-6">
          Applicant Details
        </h1>

        {applicant ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Display Applicant Details */}
          <div className="bg-white shadow-xl rounded-xl p-6 hover:scale-105 transition-transform ease-in-out duration-300">
            <h3 className="text-2xl text-gray-800 font-semibold mb-6">Personal Info</h3>
        
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-lg text-gray-600 font-medium">Name:</p>
                <p className="text-lg text-gray-800">{applicant.fname} {applicant.lname}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg text-gray-600 font-medium">Age:</p>
                <p className="text-lg text-gray-800">{applicant.age}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg text-gray-600 font-medium">Contact:</p>
                <p className="text-lg text-gray-800">{applicant.contact}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg text-gray-600 font-medium">Country:</p>
                <p className="text-lg text-gray-800">{applicant.country}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg text-gray-600 font-medium">Profession:</p>
                <p className="text-lg text-gray-800">{applicant.profession}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg text-gray-600 font-medium">Organization:</p>
                <p className="text-lg text-gray-800">{applicant.organization}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg text-gray-600 font-medium">Area:</p>
                <p className="text-lg text-gray-800">{applicant.area}</p>
              </div>
            </div>
        
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Profile Image</h3>
              <img
                src={`data:image/jpeg;base64,${applicant.img}`}
                alt="Applicant"
                className="w-40 h-40 object-cover rounded-full border-4 border-gray-200 shadow-md mx-auto"
              />
            </div>
          </div>
        </div>
        
        ) : (
          <div className="text-center text-black">
            <p>No account details found for this user. Please fill out the details below:</p>

            {/* Display Edit Form */}
            <div className="p-6 bg-white/20 backdrop-blur-md shadow-xl rounded-lg mt-6">
              <h3 className="text-xl text-black font-mono mb-4">Complete Your Info</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-4">
                    <label className="text-black">First Name</label>
                    <input
                      type="text"
                      name="fname"
                      value={formData.fname}
                      onChange={handleInputChange}
                      className="w-full mt-2 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-black">Last Name</label>
                    <input
                      type="text"
                      name="lname"
                      value={formData.lname}
                      onChange={handleInputChange}
                      className="w-full mt-2 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-black">Age</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="w-full mt-2 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-black">Contact</label>
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      className="w-full mt-2 p-2 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-black">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full mt-2 p-2 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-black">Profession</label>
                    <input
                      type="text"
                      name="profession"
                      value={formData.profession}
                      onChange={handleInputChange}
                      className="w-full mt-2 p-2 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-black">Organization</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full mt-2 p-2 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-black">Area</label>
                    <input
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      className="w-full mt-2 p-2 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-black">Profile Image</label>
                    <input
                      type="file"
                      name="img"
                      onChange={handleImageChange}
                      className="w-full mt-2 p-2 rounded-md"
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-2 px-4 bg-green-500 text-white rounded-md"
                  >
                    Save Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicantDetailsPage;
