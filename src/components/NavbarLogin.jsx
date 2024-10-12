import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import img1 from './images/search.png';

const Navbar = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    return (
        <nav className="bg-white p-2 border-b-2">
            <div className="flex items-center justify-between">
                <h1 className="text-green-400 text-4xl font-semibold ml-10">Innovis</h1>
                
                <div className="flex space-x-4 border-black border-2 rounded-sm pl-1">
                    <div className="flex justify-between bg-white">
                        <img src={img1} alt="Description" className="w-10 h-10" />
                        <input 
                            type="text" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='search'
                            className="block w-full p-2 bg-white border-gray-300 placeholder-black rounded hover:border-black focus:outline-none focus:border-black" 
                            required 
                        />
                    </div>
                </div>
                <div className="flex space-x-4 border-black border-l pl-1">
                    <button 
                        onClick={() => navigate('/explore')} // Navigate to /explore
                        className="w-24 bg-green-400 text-white text-lg font-mono p-2 rounded-md border-2 border-black hover:bg-white hover:text-black transition-all duration-500"
                    >
                        Explore
                    </button>
                    
                    <button 
                        className="w-24 bg-black text-white text-lg font-mono p-2 rounded-md border-2 border-black hover:bg-white hover:text-black transition-all duration-500"
                    >
                        Account
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
