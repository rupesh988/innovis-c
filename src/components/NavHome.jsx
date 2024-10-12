import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="bg-white p-2 border-b-2">
            <div className="flex items-center justify-between">
                <h1 className="text-green-400 text-4xl font-semibold ml-10">Innovis</h1>
                <h1>welcome</h1>
                <div className="flex space-x-4 border-black border-l pl-1">
                    <button 
                        onClick={() => navigate('/signup')} 
                        className="w-24 bg-gray-100 text-black font-mono text-lg p-2 rounded-md border-2 border-black hover:bg-green-200 hover:text-black transition-all duration-200 hover:drop-shadow-[0_35px_35px_rgba(0,200,0,0.25)]"
                    >
                        Signup
                    </button>
                    <button 
                        onClick={() => navigate('/login')} 
                        className="w-24 bg-black text-white text-lg font-mono p-2 rounded-md border-2 border-black hover:bg-white hover:text-black transition-all duration-500"
                    >
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
