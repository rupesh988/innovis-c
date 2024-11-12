import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate(); // Initialize navigate
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlesignUp = async () => {
        console.log("request sent")

        const data = {
            email:email,
            password:password
        }

        const response = await axios.post("http://localhost:8080/signup",data);

        const res = await response.data;
        console.log(res)
        if(res.status == true){
            navigate("/login")
        }else{
            alert(res.message);
        }
        
    }
    return (
        <div className="bg-white flex flex-col items-center justify-center min-h-screen">
            <div className="flex items-center justify-between p-4 bg-white absolute left-6 top-1 hover:translate-x-5 duration-500 ease-in-out">
                <h1 className="text-black text-4xl font-bold hover:underline">
                    Innovis
                </h1>
            </div>
            <div className="bg-white p-8 rounded-lg w-96">
                <h2 className="text-2xl font-bold font-mono text-center mb-6">Signup for Innovis</h2>
                <div className="mb-6 font-bold w-full h-12 bg-white text-black text-lg p-2 rounded border-2 border-black hover:bg-gray-100 hover:border-green-300 hover:text-green-300 transition-all duration-300">
                    <text> Continue with Google</text>
                </div>
                <text className="mb-4">or</text>
                <div className="mb-4 mt-4">
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='email'
                        className="mt-1 block w-full p-2 bg-green-50 border-2 border-gray-300 placeholder-black font-mono rounded hover:border-2 hover:border-black focus:outline-none focus:border-2 focus:border-black" 
                        required 
                    />
                </div>

                <div className="mb-4">
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='password'
                        className="mt-1 block w-full p-2 bg-green-50 rounded border-gray-300 placeholder-black border-2 font-mono hover:border-2 hover:border-black focus:outline-none focus:border-2 focus:border-black" 
                        required 
                    />
                </div>

                <button 
                    onClick={handlesignUp}
                    className="w-full bg-black text-white text-lg p-2 rounded-lg border-2 border-black hover:bg-white hover:text-black transition-all duration-500"
                >
                    Signup
                </button>

                <p className="mt-4 text-center text-gray-600">
                    <a href="/login" className="text-blue-500 hover:underline">Already have an Account?</a>
                </p>
                
                <p className="mt-4 text-center text-gray-600 font-thin">
                    By continuing, you agree to our Terms of Use and acknowledge our Privacy Policy.
                </p>
            </div>
        </div>
    );
};

export default Signup;
