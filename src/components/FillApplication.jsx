import React from "react";
import axios from "axios";
import { useState } from "react";
const App = () =>{

    const [email,setEmail]=useState("");
    return(
        <div className="bg-gray-50 flex flex-col items-center justify-center min-h-screen">
            <div class="flex flex-row items-center w-full max-w-md p-2 bg-white rounded-lg shadow-lg mx-auto mt-10">
                <div className="bg-white  h-full  p-1 mr-2">
                <div className="mb-2 mt-2 w-full ">
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        className=" block w-full p-2 bg-green-50 border-2 border-gray-300 placeholder-black rounded hover:border-2 hover:border-black focus:outline-none focus:border-2 focus:border-black" 
                        required 
                    />
                </div>
                <div className="mb-2 mt-2">
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        className=" block w-full p-2 bg-green-50 border-2 border-gray-300 placeholder-black rounded hover:border-2 hover:border-black focus:outline-none focus:border-2 focus:border-black" 
                        required 
                    />
                </div>
                <div className="mb-2 mt-2">
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        className=" block w-full p-2 bg-green-50 border-2 border-gray-300 placeholder-black rounded hover:border-2 hover:border-black focus:outline-none focus:border-2 focus:border-black" 
                        required 
                    />
                </div>
                </div>
                <div className="bg-white w-1/2 h-full  p-1">
                <div className="mb-2 mt-2">
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        className=" block w-full p-2 bg-green-50 border-2 border-gray-300 placeholder-black rounded hover:border-2 hover:border-black focus:outline-none focus:border-2 focus:border-black" 
                        required 
                    />
                </div>
                <div className="mb-2 mt-2">
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        className=" block w-full p-2 bg-green-50 border-2 border-gray-300 placeholder-black rounded hover:border-2 hover:border-black focus:outline-none focus:border-2 focus:border-black" 
                        required 
                    />
                </div>
                <div className="mb-2 mt-2">
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        className=" block w-full p-2 bg-green-50 border-2 border-gray-300 placeholder-black rounded hover:border-2 hover:border-black focus:outline-none focus:border-2 focus:border-black" 
                        required 
                    />
                </div>
                </div>

                

            </div>

        </div>

    );
}

export default App;