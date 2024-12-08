import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
    
        const data = {
            email: email,
            password: password
        };
    
        try {
            const response = await axios.post("http://localhost:8080/login", data);
            const res = await response.data;
    
            if (res.status) {
                localStorage.setItem("user", email);
                navigate('/admin');
            } else {
                alert("Login failed");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred during login.");
        }
    };
    

    return (
        <div className="bg-white flex flex-col items-center justify-center min-h-screen">
            <div className="flex items-center justify-between p-4 bg-white absolute left-6 top-1 hover:translate-x-5 duration-500 ease-in-out">
                <h1 className="text-black text-4xl font-bold">Innovis</h1>
            </div>
            <div className="bg-white p-8 rounded-lg w-96">
                <h2 className="text-2xl font-bold font-mono text-center mb-6">Innovis</h2>
                <div className="mb-6 font-bold w-full h-12 bg-white text-black text-lg p-2 rounded border-2 border-black hover:bg-gray-100 transition-all duration-300">
                    <text>Admin Login</text>
                </div>
                <text className="mb-4">or</text>
                <div className="mb-4 mt-4">
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        className="mt-1 block w-full p-2 bg-red-50 border-2 border-gray-300 placeholder-black rounded hover:border-2 hover:border-black focus:outline-none focus:border-2 focus:border-black" 
                        required 
                    />
                </div>

                <div className="mb-4">
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        className="mt-1 block w-full p-2 bg-red-50 rounded border-gray-300 placeholder-black border-2 hover:border-2 hover:border-black focus:outline-none focus:border-2 focus:border-black" 
                        required 
                    />
                </div>

                <button 
                    onClick={handleLogin} 
                    className="w-full bg-red-500 text-white text-lg p-2 rounded-lg border-2 border-black hover:bg-white hover:text-black transition-colors ease-out duration-300"
                >
                    Login
                </button>

                <p className="mt-4 text-center text-gray-600">
                    <a href="/reset" className="text-blue-500 hover:underline">Forgot Password?</a>
                </p>
                
                <p className="mt-4 text-center text-gray-600">
                    Don't have an  ADmin account ? <a href="/asignup" className="text-blue-500 hover:underline">Sign Up</a>
                    <a href="/login" className="text-blue-500 hover:underline"> collaborater Login?</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
